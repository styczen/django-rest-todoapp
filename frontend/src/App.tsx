import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/todos/")
      .then((response) => response.json())
      .then((data) => {
        const newTodos: Todo[] = [];
        for (let e of data) {
          newTodos.push(e);
        }
        setTodos(newTodos);
      })
      .catch((e) => console.log(e));
  }, []);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });

    fetch(`http://localhost:8000/api/todos/${selectedTodo.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: selectedTodo.text,
        complete: !selectedTodo.complete,
      }),
    })
      .then((resp) => resp.json())
      .then(() => setTodos(newTodos))
      .catch((e) => console.log(e));
  };

  const addTodo: AddTodo = (text: string) => {
    fetch("http://localhost:8000/api/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, complete: false }),
    })
      .then((resp) => resp.json())
      .then((data) => setTodos([...todos, data]));
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
