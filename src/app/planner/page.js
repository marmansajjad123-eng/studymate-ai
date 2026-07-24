"use client";

import { useEffect, useState } from "react";

export default function Planner() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("studymate_tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "studymate_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks, loaded]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((item) => item.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          📅 Study Planner
        </h1>

        <p className="text-gray-500 mb-6">
          Total Tasks: <strong>{tasks.length}</strong>
        </p>
                <input
          type="text"
          placeholder="Add today's study task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>

        <div className="mt-6">

          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">
              No tasks added yet.
            </p>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-3"
              >

                <label className="flex items-center gap-3 flex-1">

                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />

                  <span
                    className={
                      item.completed
                        ? "line-through text-gray-500"
                        : ""
                    }
                  >
                    {item.text}
                  </span>

                </label>

                <button
                  onClick={() => deleteTask(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>
              </div>

    </main>
  );
}