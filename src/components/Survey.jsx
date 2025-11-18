import { useEffect, useMemo, useState } from "react";
import AdSenseBlock from "./AdSenseBlock";
import HandcraftedFrame from "./HandcraftedFrame";

const API = import.meta.env.VITE_BACKEND_URL;

function Progress({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2 text-sm text-neutral-500">
        <span>Question {current + 1} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div className="h-full bg-neutral-800" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function AdCard() {
  return (
    <div className="mt-8">
      <HandcraftedFrame title="Sponsored">
        <div className="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&q=80&auto=format&fit=crop" alt="ad" className="w-24 h-24 rounded-2xl object-cover shadow" />
          <div>
            <h3 className="text-neutral-900 font-semibold">Grab exclusive deals today</h3>
            <p className="text-neutral-600 text-sm">Limited-time offer on gadgets, courses, and travel packages.</p>
            <a href="#" className="soft-btn primary inline-block mt-3 text-sm">Learn More</a>
          </div>
        </div>
      </HandcraftedFrame>
      <div className="mt-4 p-3 rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] inner-shadow">
        <AdSenseBlock slot="1234567890" />
      </div>
    </div>
  );
}

export default function Survey() {
  const [survey, setSurvey] = useState(null);
  const [error, setError] = useState("");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/survey`);
        const data = await res.json();
        setSurvey(data);
      } catch (e) {
        setError("Failed to load survey");
      }
    }
    load();
  }, []);

  const currentQ = useMemo(() => survey?.questions?.[idx], [survey, idx]);
  const total = survey?.questions?.length || 0;

  function setAnswer(qid, value) {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  }

  function next() {
    if (idx < total - 1) setIdx((i) => i + 1);
  }
  function back() {
    if (idx > 0) setIdx((i) => i - 1);
  }

  async function submit() {
    try {
      const payload = {
        survey_id: survey.survey_id,
        answers: Object.entries(answers).map(([qid, ans]) => ({ question_id: qid, answer: String(ans) })),
      };
      const res = await fetch(`${API}/api/survey/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch (e) {
      setError("Could not submit. Please try again.");
    }
  }

  if (error) {
    return (
      <div className="text-center text-red-500">{error}</div>
    );
  }

  if (!survey) {
    return (
      <div className="text-center text-neutral-500">Loading survey...</div>
    );
  }

  if (submitted) {
    return (
      <div>
        <HandcraftedFrame title="Thanks!">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Thanks for completing the survey!</h2>
          <p className="text-neutral-600">We appreciate your time. Check out these offers while we process your results.</p>
        </HandcraftedFrame>
        <AdCard />
      </div>
    );
  }

  return (
    <HandcraftedFrame title={survey.title}>
      <p className="text-neutral-600 mb-6">{survey.description}</p>

      <Progress current={idx} total={total} />

      <div className="mb-6">
        <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{currentQ?.topic}</div>
        <div className="text-neutral-900 text-lg mb-4">{currentQ?.text}</div>

        {currentQ?.type === "scale" && (
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map((n) => (
              <button
                key={n}
                onClick={() => setAnswer(currentQ.id, n)}
                className={`soft-btn ${answers[currentQ.id] === n ? 'border-neutral-400' : ''}`}
              >{n}</button>
            ))}
          </div>
        )}

        {currentQ?.type === "single" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentQ.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswer(currentQ.id, opt)}
                className={`soft-btn text-left ${answers[currentQ.id] === opt ? 'border-neutral-400' : ''}`}
              >{opt}</button>
            ))}
          </div>
        )}

        {currentQ?.type === "text" && (
          <textarea
            rows={4}
            className="soft-input"
            placeholder="Type your answer..."
            value={answers[currentQ.id] || ""}
            onChange={(e) => setAnswer(currentQ.id, e.target.value)}
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={back} disabled={idx === 0} className="soft-btn disabled:opacity-40">Back</button>
        {idx < total - 1 ? (
          <button onClick={next} className="soft-btn primary">Next</button>
        ) : (
          <button onClick={submit} className="soft-btn success">Submit</button>
        )}
      </div>
    </HandcraftedFrame>
  );
}
