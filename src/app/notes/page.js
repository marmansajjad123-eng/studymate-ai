"use client";

import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("studymate_notes");

    if (saved) {
      setNotes(JSON.parse(saved));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "studymate_notes",
      JSON.stringify(notes)
    );
  }, [notes, loaded]);

  const addNote = () => {
    if (!text.trim()) return;

    if (editingId) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? { ...note, text }
            : note
        )
      );

      setEditingId(null);
    } else {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text,
        },
      ]);
    }

    setText("");
  };

  const editNote = (id) => {
    const note = notes.find((n) => n.id === id);

    setText(note.text);
    setEditingId(id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const downloadNotes = () => {
    const blob = new Blob(
      [notes.map((n) => n.text).join("\n\n")],
      {
        type: "text/plain",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "StudyMate_Notes.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

 const filteredNotes = notes.filter((note) => {
  const noteText =
    typeof note === "string" ? note : note.text;

  return noteText
    .toLowerCase()
    .includes(search.toLowerCase());
});

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          📝 Smart Notes
        </h1>

        <p className="text-gray-500 mb-6">
          Total Notes: <strong>{notes.length}</strong>
        </p>
                <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Write your study note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-lg p-3 h-32"
        />

        <div className="flex gap-3 mt-4">

          <button
            onClick={addNote}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            {editingId ? "Update Note" : "Add Note"}
          </button>

          <button
            onClick={downloadNotes}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Download Notes
          </button>

        </div>

        <div className="mt-8">

          {filteredNotes.length === 0 ? (
            <p className="text-gray-500 text-center">
              No notes found.
            </p>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={typeof note === "string" ? note : note.id}
                className="bg-gray-100 rounded-xl p-4 mb-4 flex justify-between items-center"
              >

                <p className="flex-1 pr-4">
                 {typeof note === "string" ? note : note.text}
                </p>

                <div className="flex gap-2">

                  <button
                    onClick={() =>
  editNote(typeof note === "string" ? null : note.id)
}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </div>
              </div>

    </main>
  );
}