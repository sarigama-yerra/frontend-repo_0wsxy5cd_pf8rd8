import { useEffect, useMemo, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL;

function Progress({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2 text-sm text-blue-200/80">
        <span>Question {current + 1} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function AdCard() {
  return (
    <div className="mt-8 p-6 rounded-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur shadow-xl">
      <div className="text-blue-200 text-sm mb-2">Sponsored</div>
      <div className="flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&q=80&auto=format&fit=crop" alt="ad" className="w-24 h-24 rounded-xl object-cover" />
        <div>
          <h3 className="text-white font-semibold">Grab exclusive deals today</h3>
          <p className="text-blue-200/80 text-sm">Limited-time offer on gadgets, courses, and travel packages.</p>
          <a href="#" className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm hover:opacity-90 transition">Learn More</a>
        </div>
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
      <div className="text-center text-red-300">{error}</div>
    );
  }

  if (!survey) {
    return (
      <div className="text-center text-blue-200">Loading survey...</div>
    );
  }

  if (submitted) {
    return (
      <div>
        <div className="p-8 rounded-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Thanks for completing the survey!</h2>
          <p className="text-blue-200/80">We appreciate your time. Check out this offer while we process your results.</p>
        </div>
        <AdCard />
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-1">{survey.title}</h2>
      <p className="text-blue-200/80 mb-6">{survey.description}</p>

      <Progress current={idx} total={total} />

      <div className="mb-6">
        <div className="text-blue-300 text-sm uppercase tracking-wider mb-1">{currentQ?.topic}</div>
        <div className="text-white text-lg mb-4">{currentQ?.text}</div>

        {currentQ?.type === "scale" && (
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map((n) => (
              <button
                key={n}
                onClick={() => setAnswer(currentQ.id, n)}
                className={`px-3 py-2 rounded-lg border ${answers[currentQ.id] === n ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-700/50 text-blue-200 border-blue-500/20'} hover:border-blue-400 transition`}
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
                className={`text-left px-4 py-2 rounded-lg border ${answers[currentQ.id] === opt ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-700/50 text-blue-200 border-blue-500/20'} hover:border-blue-400 transition`}
              >{opt}</button>
            ))}
          </div>
        )}

        {currentQ?.type === "text" && (
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-blue-500/20 text-blue-100 placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="Type your answer..."
            value={answers[currentQ.id] || ""}
            onChange={(e) => setAnswer(currentQ.id, e.target.value)}
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={back} disabled={idx === 0} className="px-4 py-2 rounded-lg border border-blue-500/20 text-blue-200 hover:border-blue-400 disabled:opacity-40">Back</button>
        {idx < total - 1 ? (
          <button onClick={next} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90">Next</button>
        ) : (
          <button onClick={submit} className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:opacity-90">Submit</button>
        )}
      </div>
    </div>
  );
}
