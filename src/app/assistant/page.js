"use client";

import { useState } from "react";

export default function Assistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        🤖 StudyMate AI Assistant
      </h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything... e.g. Explain Binary Search Tree"
        className="w-full max-w-3xl h-40 border rounded-lg p-4"
      />

      <br />

      <button
        onClick={askAI}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {reply && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow max-w-3xl">
          <h2 className="text-xl font-bold mb-3">AI Response</h2>
          <div className="whitespace-pre-wrap leading-8">
      {reply}
        </div>
        </div>
      )}
    </main>
  );
}