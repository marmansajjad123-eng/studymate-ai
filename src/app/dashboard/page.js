"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [notesCount, setNotesCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [quizCount, setQuizCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const notes =
      JSON.parse(localStorage.getItem("studymate_notes")) || [];

    const tasks =
      JSON.parse(localStorage.getItem("studymate_tasks")) || [];

    const quizzes =
      Number(localStorage.getItem("studymate_quizzes")) || 0;

    setNotesCount(notes.length);
    setTasksCount(tasks.length);
    setQuizCount(quizzes);

    const completed = tasks.filter(
      (task) => task.completed
    ).length;

    if (tasks.length > 0) {
      setProgress(
        Math.round((completed / tasks.length) * 100)
      );
    }
  }, []);

  const cards = [
    {
      title: "Study Notes",
      desc: "Create and manage notes",
      icon: "📝",
      link: "/notes",
      color: "bg-blue-500",
    },
    {
      title: "Quiz Generator",
      desc: "Generate AI quizzes",
      icon: "🧠",
      link: "/quiz",
      color: "bg-green-500",
    },
    {
      title: "Study Planner",
      desc: "Manage your tasks",
      icon: "📅",
      link: "/planner",
      color: "bg-purple-500",
    },
    {
      title: "AI Assistant",
      desc: "Ask anything",
      icon: "🤖",
      link: "/assistant",
      color: "bg-orange-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold text-blue-700">
              StudyMate AI
            </h1>

            <p className="text-gray-600 mt-2">
              Welcome back! Keep learning 🚀
            </p>
          </div>

          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Home
          </Link>
        </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">Notes</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {notesCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">Tasks</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {tasksCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">Quizzes</h2>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {quizCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">Progress</h2>

            <p className="text-4xl font-bold text-orange-600 mt-2">
              {progress}%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>

          </div>

        </div>

        <h2 className="text-3xl font-bold mb-6">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.link}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer h-full">

                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl text-white ${card.color}`}
                >
                  {card.icon}
                </div>

                <h2 className="text-2xl font-bold mt-5">
                  {card.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {card.desc}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}