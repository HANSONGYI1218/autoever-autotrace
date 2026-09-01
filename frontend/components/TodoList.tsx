"use client";

import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  // READ
  const getTodos = async () => {
    const response = await fetch("/api/query/todos");
    const data = await response.json();

    // 현재 API는 실제 데이터를 반환하지 않기 때문에
    // 나중에 DB 연결 후 이 부분에서 todos를 받으면 됨
    console.log(data);
  };

  // CREATE
  const addTodo = async () => {
    if (!title.trim()) return;

    const response = await fetch("/api/command/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    const data = await response.json();

    console.log(data);

    setTitle("");
    getTodos();
  };

  // UPDATE
  const updateTodo = async (id: number) => {
    const newTitle = prompt("수정할 내용을 입력하세요.");

    if (!newTitle?.trim()) return;

    const response = await fetch(`/api/command/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        completed: false,
      }),
    });

    const data = await response.json();

    console.log(data);

    getTodos();
  };

  // DELETE
  const deleteTodo = async (id: number) => {
    const response = await fetch(`/api/command/todos/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data);

    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>

      {/* CREATE */}
      <div>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTodo}>추가</button>
      </div>

      {/* READ */}
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>

            {/* UPDATE */}
            <button onClick={() => updateTodo(todo.id)}>수정</button>

            {/* DELETE */}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}
