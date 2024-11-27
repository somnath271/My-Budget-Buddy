'use client';

import { useState } from 'react';

export default function SplitPage() {
  const [splitEntries, setSplitEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    totalAmount: '',
    totalPersons: 0,
    paidBy: 0,
    personNames: [],
    payerAmounts: [],
    payerNames: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle dynamic person input creation
  const handlePersonsChange = (e) => {
    const totalPersons = parseInt(e.target.value) || 0;
    const namesArray = Array(totalPersons).fill('');
    setNewEntry({
      ...newEntry,
      totalPersons,
      personNames: namesArray,
    });
  };

  // Handle dynamic payer input creation
  const handlePaidByChange = (e) => {
    const paidBy = parseInt(e.target.value) || 0;
    const payerNamesArray = Array(paidBy).fill('');
    setNewEntry({
      ...newEntry,
      paidBy,
      payerNames: payerNamesArray,
      payerAmounts: Array(paidBy).fill(0), // Initialize amounts to 0
    });
  };

  // Handle adding or updating an entry
  const handleAddEntry = () => {
    if (!newEntry.totalAmount || !newEntry.totalPersons) {
      alert("Please fill in the total amount and number of persons involved.");
      return;
    }

    // Calculate final amounts to be paid and paid amounts
    const updatedPersons = calculateAmounts();

    if (editingIndex !== null) {
      const updatedEntries = [...splitEntries];
      updatedEntries[editingIndex] = { ...newEntry, personAmounts: updatedPersons };
      setSplitEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setSplitEntries([...splitEntries, { ...newEntry, personAmounts: updatedPersons }]);
    }

    resetForm();
  };

  // Reset form function
  const resetForm = () => {
    setNewEntry({
      totalAmount: '',
      totalPersons: 0,
      paidBy: 0,
      personNames: [],
      payerAmounts: [],
      payerNames: [],
    });
    setShowForm(false);
  };

  // Handle editing an existing entry
  const handleEditEntry = (index) => {
    setNewEntry(splitEntries[index]);
    setEditingIndex(index);
    setShowForm(true); // Show form to edit
  };

  // Handle deleting an entry
  const handleDeleteEntry = (index) => {
    const filteredEntries = splitEntries.filter((_, i) => i !== index);
    setSplitEntries(filteredEntries);
  };

  // Calculate amounts for each person
  const calculateAmounts = () => {
    const totalAmount = parseFloat(newEntry.totalAmount) || 0;
    const totalPersons = newEntry.totalPersons || 1;
    const equalShare = totalAmount / totalPersons;

    return newEntry.personNames.map((name, index) => {
      return {
        name,
        amountToPay: equalShare,
        amountPaid: newEntry.payerNames.includes(name) ? parseFloat(newEntry.payerAmounts[newEntry.payerNames.indexOf(name)]) || 0 : 0,
      };
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10 animate-bounce">Split Expenses</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
        onClick={() => {
          resetForm(); // Reset the form to clear any previous input
          setShowForm(true); // Show the form modal
        }}
      >
        Add Split
      </button>

      {/* Form Modal (Fixed Position to avoid overlap) */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
            <label className="block mb-2">Total Amount:</label>
            <input
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              type="number"
              value={newEntry.totalAmount}
              onChange={(e) => setNewEntry({ ...newEntry, totalAmount: e.target.value })}
            />

            <label className="block mb-2">Total number of persons involved:</label>
            <input
              type="number"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newEntry.totalPersons}
              onChange={handlePersonsChange}
            />

            {/* Dynamic input fields for each person involved */}
            {newEntry.personNames.map((_, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2">Person {index + 1} Name:</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  value={newEntry.personNames[index]}
                  onChange={(e) => {
                    const updatedNames = [...newEntry.personNames];
                    updatedNames[index] = e.target.value;
                    setNewEntry({ ...newEntry, personNames: updatedNames });
                  }}
                />
              </div>
            ))}

            <label className="block mb-2">Paid by (number of people):</label>
            <input
              type="number"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newEntry.paidBy}
              onChange={handlePaidByChange}
            />

            {/* Dynamic input fields for each payer */}
            {newEntry.payerNames.map((_, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2">Payer {index + 1} Name:</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  value={newEntry.payerNames[index]}
                  onChange={(e) => {
                    const updatedPayerNames = [...newEntry.payerNames];
                    updatedPayerNames[index] = e.target.value;
                    setNewEntry({ ...newEntry, payerNames: updatedPayerNames });
                  }}
                />
                <label className="block mb-2">Amount Paid:</label>
                <input
                  type="number"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={newEntry.payerAmounts[index]}
                  onChange={(e) => {
                    const updatedPayerAmounts = [...newEntry.payerAmounts];
                    updatedPayerAmounts[index] = e.target.value;
                    setNewEntry({ ...newEntry, payerAmounts: updatedPayerAmounts });
                  }}
                />
              </div>
            ))}

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

{/* Displaying the Split Entries */}
<div className="grid grid-cols-4 gap-4 mt-10">
  {splitEntries.map((entry, index) => {
    return (
      <div key={index} className="bg-white p-4 shadow-lg rounded-lg relative">
        <h2 className="text-xl font-bold">Total: {entry.totalAmount}</h2>
        <h3 className="font-semibold">Details:</h3>
        {entry.personNames.map((name, idx) => (
          <div key={idx} className="flex justify-between mb-2">
            <span className="font-medium">{name}</span>
            <div>
              <span className="block">Amount To Pay: {entry.personAmounts[idx]?.amountToPay.toFixed(2)}</span>
              <span className="block">Amount Paid: {entry.personAmounts[idx]?.amountPaid.toFixed(2)}</span>
              <span className="block">Remaining: {(entry.personAmounts[idx]?.amountToPay - entry.personAmounts[idx]?.amountPaid).toFixed(2)}</span>
            </div>
          </div>
        ))}
        <div className="absolute top-2 right-2 space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
    );
  })}
</div>

    </div>
  );
}
