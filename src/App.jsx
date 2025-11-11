import { useState, useEffect } from 'react';
    import TodoList from './components/TodoList';
    import './App.css';
    import { v4 as uuidv4 } from 'uuid';

    function App() {
      const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          return JSON.parse(savedTodos);
        } else {
          return [];
        }
      });

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTodo = (text) => {
        const newTodo = {
          id: uuidv4(),
          text,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      };

      const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };

      return (
        <div className="App">
          <h1>My Todo List</h1>
          <TodoList
            todos={todos}
            addTodo={addTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      );
    }

    export default App;
