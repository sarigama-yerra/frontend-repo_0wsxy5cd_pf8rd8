import Survey from "./components/Survey";

function App() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Quick Survey</h1>
          <p className="text-blue-200 mt-2">Answer a few questions. See a sponsored ad when you finish.</p>
        </div>

        <Survey />

        <div className="text-center mt-8 text-sm text-blue-300/60">
          Your responses help us improve experiences across major topics.
        </div>
      </div>
    </div>
  );
}

export default App
