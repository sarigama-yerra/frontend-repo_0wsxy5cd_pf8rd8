export default function Privacy() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative soft-card inner-shadow p-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">Privacy Policy</h1>
          <p className="text-neutral-600 leading-relaxed">
            We collect your survey answers to improve aggregated insights. We do not sell personal information. Data may be stored in anonymized form and used to surface relevant offers. You can request deletion by contacting support.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li><span className="font-semibold text-neutral-900">Data we collect:</span> survey responses, timestamps, browser metadata.</li>
            <li><span className="font-semibold text-neutral-900">How we use it:</span> analytics, service improvements, contextual advertising.</li>
            <li><span className="font-semibold text-neutral-900">Cookies:</span> used for session and measurement. You can disable in your browser.</li>
            <li><span className="font-semibold text-neutral-900">Contact:</span> privacy@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
