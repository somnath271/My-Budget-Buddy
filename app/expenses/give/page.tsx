'use client';

import { useState } from 'react';

export default function GivePage() {
  const [giveEntries, setGiveEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: '', amount: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle adding or updating an entry
  const handleAddEntry = () => {
    if (editingIndex !== null) {
      const updatedEntries = [...giveEntries];
      updatedEntries[editingIndex] = newEntry;
      setGiveEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setGiveEntries([...giveEntries, newEntry]);
    }
    setNewEntry({ name: '', amount: '', description: '' });
    setShowForm(false);
  };

  // Handle editing an existing entry
  const handleEditEntry = (index) => {
    setNewEntry(giveEntries[index]);
    setEditingIndex(index);
    setShowForm(true); // Show form to edit
  };

  // Handle deleting an entry
  const handleDeleteEntry = (index) => {
    const filteredEntries = giveEntries.filter((_, i) => i !== index);
    setGiveEntries(filteredEntries);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10 animate-bounce">Add Your Give Details</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setShowForm(true);
          setNewEntry({ name: '', amount: '', description: '' });
          setEditingIndex(null);
        }}
      >
        Add
      </button>

      {/* Form Modal (Fixed Position to avoid overlap) */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
            <label className="block mb-2">Name:</label>
            <input
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newEntry.name}
              onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
            />
            <label className="block mb-2">Amount:</label>
            <input
              type="number"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newEntry.amount}
              onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
            />
            <label className="block mb-2">Description:</label>
            <textarea
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newEntry.description}
              onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
            />

            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleAddEntry}
            >
              Add Entry
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Displaying the Entries */}
      <div className="grid grid-cols-4 gap-4 mt-10">
        {giveEntries.map((entry, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg relative">
            <h2 className="text-xl font-bold">{entry.name}</h2>
            <p>Amount: {entry.amount}</p>
            <p>Description: {entry.description}</p>
            <div className="absolute top-2 right-2 space-x-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleEditEntry(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDeleteEntry(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
