// app/components/Modal.tsx
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNote: (title: string, content: string, color: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff'); // Default color

  const handleSubmit = () => {
    onAddNote(title, content, color);
    setTitle('');
    setContent('');
    setColor('#ffffff'); // Reset color to default
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Add a Note</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-2 h-20"
        />
        <label className="block mb-2">Choose Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-between">
          <button 
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2"
          >
            Add Note
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-300 p-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
