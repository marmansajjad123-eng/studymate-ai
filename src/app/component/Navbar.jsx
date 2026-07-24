"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(
      localStorage.getItem("studymate_loggedIn") === "true"
    );
  }, []);

  const logout = () => {
    localStorage.removeItem("studymate_loggedIn");
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5">

      <h1 className="text-3xl font-bold text-blue-700">
        <Link href="/">StudyMate AI</Link>
      </h1>

      <div className="space-x-6">
              {loggedIn ? (
          <>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

    </nav>
  );
}