"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(
      localStorage.getItem("studymate_loggedIn") === "true"
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 mt-24">

      <h2 className="text-6xl font-bold text-gray-900">
        Your AI Study Partner
      </h2>

      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        Organize notes, create quizzes, chat with AI, and plan your studies —
        all in one modern application.
      </p>

      <Link href={loggedIn ? "/dashboard" : "/login"}>
              <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white text-lg hover:bg-blue-700 transition">
          {loggedIn ? "Go to Dashboard" : "Get Started"}
        </button>
      </Link>

    </section>
  );
}