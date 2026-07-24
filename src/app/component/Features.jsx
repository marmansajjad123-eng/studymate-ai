export default function Features() {
  return (
    <section className="mt-32 px-10 pb-20">

      <h2 className="text-4xl font-bold text-center text-gray-900">
        Powerful Features
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Everything you need for smarter learning in one place.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-5xl">🤖</div>
          <h3 className="text-xl font-bold mt-4">AI Assistant</h3>
          <p className="text-gray-600 mt-2">
            Ask questions and get instant AI-powered answers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-5xl">📝</div>
          <h3 className="text-xl font-bold mt-4">Smart Notes</h3>
          <p className="text-gray-600 mt-2">
            Create, edit and organize all your study notes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-5xl">📅</div>
          <h3 className="text-xl font-bold mt-4">Study Planner</h3>
          <p className="text-gray-600 mt-2">
            Plan your daily study routine and track progress.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-5xl">🧠</div>
          <h3 className="text-xl font-bold mt-4">Quiz Generator</h3>
          <p className="text-gray-600 mt-2">
            Generate AI quizzes to prepare for exams.
          </p>
        </div>

      </div>

    </section>
  );
}