import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { Moon } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614154326574-957948580199?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="bg-opacity-50 min-h-screen">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-white mb-6 flex items-center">
            <Moon className="mr-2" />
            Space Todo
          </h1>
          <TodoForm onAdd={addTodo} />
          <ul className="mt-4">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
