import React, { useEffect, useState } from "react";

const TodoList = (props) => {
  // const [todoItems, setTodoItems] = useState(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   return storedTodos ? JSON.parse(storedTodos) : [];
  // });
  const [todoItems, setTodoItems] = useState([]);
  const [completedTodoItems, setCompletedTodoItems] = useState([]);
  const [showIncompleteTodo, setShowIncompleteTodo] = useState(true);
  const [todoInput, setTodoInput] = useState([""]);

  useEffect(() => {
    setTimeout(
      () =>
        setTodoItems([
          { id: 1, item: "list 1", status: "incomplete", edit: false },
          { id: 2, item: "list 2", status: "incomplete", edit: false },
          { id: 3, item: "list 3", status: "incomplete", edit: false },
        ]),
      3000
    );
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todoItems));
  // }, [todoItems]);

  if (todoItems.length === 0) {
    return <p> Loading...</p>;
  }

  const handleCompletedTodo = (completedTodoItem) => (e) => {
    const updatedTodoItems = todoItems.filter(
      (todoItem) => todoItem.id !== completedTodoItem.id
    );
    const updatedCompletedTodoItems = [
      ...completedTodoItems,
      completedTodoItem,
    ];
    setTodoItems(updatedTodoItems);
    setCompletedTodoItems(updatedCompletedTodoItems);
  };

  const handleEditTodo = (id) => (e) => {
    const newText = e.target.value;
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, item: newText } : todo
      )
    );
  };

  const handleInitiateEditTodo = (id) => (e) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, edit: true } : todo))
    );
  };

  const handleCancelEditTodo = (id) => (e) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, edit: false } : todo
      )
    );
  };

  const createTodoListRow = (todoItem) => {
    return (
      <li key={todoItem.id} onDoubleClick={handleInitiateEditTodo(todoItem.id)}>
        {todoItem.edit ? (
          <input
            value={todoItem.item}
            onChange={handleEditTodo(todoItem.id)}
            onBlur={handleCancelEditTodo(todoItem.id)}
            autoFocus
          ></input>
        ) : (
          <div>
            {todoItem.item}
            {todoItem.status === "incomplete" ? (
              <button onClick={handleCompletedTodo(todoItem)}>Completed</button>
            ) : null}
          </div>
        )}
      </li>
    );
  };

  const showTodoList = () => {
    const todosToDisplay = showIncompleteTodo ? todoItems : completedTodoItems;
    const todoList = todosToDisplay.map((todoItem) =>
      createTodoListRow(todoItem)
    );
    return todoList;
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodoItems((prevTodoItems) => [
      { id: Date.now(), item: todoInput, status: "incomplete" },
      ...prevTodoItems,
    ]);
  };

  const handleInputTodo = (e) => {
    setTodoInput(e.target.value);
  };

  const handleShowIncompleteTodoList = () => setShowIncompleteTodo(true);

  const handleShowCompletedTodoList = () => setShowIncompleteTodo(false);

  return (
    <>
      <form>
        <input value={todoInput} onChange={handleInputTodo}></input>
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <ui>{showTodoList()}</ui>
      <div>
        <button type="button" onClick={handleShowIncompleteTodoList}>
          Incomplete
        </button>
        <button type="button" onClick={handleShowCompletedTodoList}>
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
