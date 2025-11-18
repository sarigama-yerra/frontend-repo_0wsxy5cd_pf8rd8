export default function Privacy() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative p-8 rounded-3xl border border-blue-500/20 bg-slate-800/60 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-blue-200/90 leading-relaxed">
            We collect your survey answers to improve aggregated insights. We do not sell personal information. Data may be stored in anonymized form and used to surface relevant offers. You can request deletion by contacting support.
          </p>
          <ul className="mt-6 space-y-3 text-blue-200/90">
            <li><span className="font-semibold text-white">Data we collect:</span> survey responses, timestamps, browser metadata.</li>
            <li><span className="font-semibold text-white">How we use it:</span> analytics, service improvements, contextual advertising.</li>
            <li><span className="font-semibold text-white">Cookies:</span> used for session and measurement. You can disable in your browser.</li>
            <li><span className="font-semibold text-white">Contact:</span> privacy@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
