import Survey from "../components/Survey";
import AdSenseBlock from "../components/AdSenseBlock";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Quick Survey</h1>
          <p className="text-blue-200 mt-2">Answer a few questions. See a sponsored ad when you finish.</p>
        </div>

        <Survey />

        <div className="mt-12">
          <div className="text-blue-300/80 text-sm mb-2">Sponsored</div>
          <div className="p-4 rounded-2xl border border-blue-500/20 bg-slate-800/40">
            <AdSenseBlock slot="1234567890" />
          </div>
        </div>
      </div>
    </div>
  );
}
