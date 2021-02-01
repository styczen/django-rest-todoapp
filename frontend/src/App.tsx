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
          console.log(e.id);
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
    setTodos(newTodos);

    // console.log(selectedTodo);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedTodo),
    };
    fetch("http://localhost:8000/api/todos/", requestOptions)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo: Todo = { text, complete: false };
    setTodos([...todos, newTodo]);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    };
    fetch("http://localhost:8000/api/todos/", requestOptions)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
