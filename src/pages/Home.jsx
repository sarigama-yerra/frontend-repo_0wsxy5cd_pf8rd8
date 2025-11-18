import Survey from "../components/Survey";
import AdSenseBlock from "../components/AdSenseBlock";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Quick Survey</h1>
          <p className="text-neutral-500 mt-2">Answer a few questions. See a sponsored ad when you finish.</p>
        </div>

        <Survey />

        <div className="mt-12">
          <div className="text-neutral-500 text-sm mb-2">Sponsored</div>
          <div className="p-4 rounded-3xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] inner-shadow">
            <AdSenseBlock slot="1234567890" />
          </div>
        </div>
      </div>
    </div>
  );
}
