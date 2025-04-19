import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-700 last:border-none">
      <div className="flex items-center">
        <button onClick={() => onToggle(id)} className="mr-2">
          {completed ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Circle className="h-5 w-5 text-gray-500" />}
        </button>
        <span className={completed ? 'line-through text-gray-500' : 'text-white'}>{text}</span>
      </div>
      <button onClick={() => onDelete(id)}>
        <Trash2 className="h-5 w-5 text-red-500 hover:text-red-600" />
      </button>
    </li>
  );
};

export default TodoItem;
