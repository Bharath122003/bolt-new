import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-800 text-white placeholder-gray-500 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
        <PlusCircle className="h-5 w-5 inline-block mr-1" />
        Add
      </button>
    </form>
  );
};

export default TodoForm;
