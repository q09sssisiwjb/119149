import React, { useState } from 'react';
    import TodoItem from './TodoItem';

    function TodoList({ todos, addTodo, toggleComplete, deleteTodo }) {
      const [newTodo, setNewTodo] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
          addTodo(newTodo);
          setNewTodo('');
        }
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      );
    }

    export default TodoList;
