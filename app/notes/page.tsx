"use client";
import { useState } from "react";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("bg-gray-700"); // Default color
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSaveNote = () => {
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = { title, description, color };
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, { title, description, color }]);
    }
    setTitle("");
    setDescription("");
    setColor("bg-gray-700");
    setShowForm(false);
  };

  const handleEdit = (index) => {
    const note = notes[index];
    setTitle(note.title);
    setDescription(note.description);
    setColor(note.color);
    setShowForm(true);
    setEditingIndex(index);
  };

  return (
    <div className="p-8 min-h-screen bg-[#2F4A62]  text-white">
      <h1 className="text-2xl font-bold mb-6">Notes</h1>

      {/* Add Button */}
      <button
        onClick={() => {
          setShowForm(true);
          setEditingIndex(null);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Add Note
      </button>

      {/* Note Form */}
      {showForm && (
        <div className="bg-white p-4 rounded shadow-lg mb-4 max-w-md">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="text-lg font-bold mb-2 border border-gray-300 p-2 rounded w-full text-black bg-white"
            style={{ fontSize: "22px" }}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-gray-300 p-2 rounded w-full mb-4 text-black bg-white"
            style={{ fontSize: "16px" }}
          />

          {/* Color Picker */}
          <label className="block mb-2 font-bold">Select Note Color:</label>
          <div className="flex gap-2 mb-4">
            {[
              "bg-red-700", 
              "bg-green-700", 
              "bg-blue-700", 
              "bg-cyan-700", 
              "bg-lime-700", 
              "bg-purple-700", 
              "bg-pink-700", 
              "bg-orange-700", 
              "bg-yellow-700"
            ].map((bgColor) => (
              <button
                key={bgColor}
                onClick={() => setColor(bgColor)}
                className={`${bgColor} w-8 h-8 rounded-full border-2 ${
                  color === bgColor ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveNote}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      )}

      {/* Display Notes */}
      <div className="grid grid-cols-4 gap-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${note.color} aspect-square flex flex-col justify-between`}
            style={{ height: "220px", width: "220px" }}
          >
            <h2
              className="font-bold whitespace-normal text-white"
              style={{ fontSize: "30px" }}
            >
              {note.title}
            </h2>
            <p
              className="text-gray-200 overflow-hidden text-ellipsis"
              style={{ fontSize: "20px" }}
            >
              {note.description.length > 18 ? note.description.slice(0, 18) + "..." : note.description}
            </p>

            {/* Edit and Delete Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-200 underline"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  setNotes(notes.filter((_, i) => i !== index))
                }
                className="text-red-300 underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
