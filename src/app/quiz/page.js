"use client";

import { useState } from "react";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateQuiz() {
    if (!topic.trim()) return;

    setLoading(true);

    try {
      const totalQuizzes =
        Number(localStorage.getItem("studymate_quizzes")) || 0;

      localStorage.setItem(
        "studymate_quizzes",
        totalQuizzes + 1
      );

      const prompt = `
Generate exactly 10 MCQs about "${topic}".

Rules:
- Each question must have 4 options (A, B, C, D).
- Mark the correct answer.
- Use simple English.
- Format neatly.
`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await res.json();

      setQuiz(data.reply);

    } catch (error) {
      setQuiz("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        🧠 AI Quiz Generator
      </h1>

      <input
        type="text"
        placeholder="Enter Topic (Example: DBMS)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-3 rounded-lg w-full max-w-2xl"
      />

      <br />

      <button
        onClick={generateQuiz}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate AI Quiz"}
      </button>
            {quiz && (
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 max-w-4xl">

          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Generated Quiz
          </h2>

          <pre className="whitespace-pre-wrap text-gray-800 leading-7">
            {quiz}
          </pre>

        </div>
      )}
          </main>
  );
}