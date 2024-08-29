import React from "react"
import Adddetails from "./components/Adddetails"
import ToDoItem from "./components/ToDoItem"
import "./App.css"
import { useState } from "react";
import Message from "./components/Message";
function App() {

  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    settodoItems((currentValue) => {
      return [...currentValue, { name: itemName, dueDate: itemDueDate }]
    });
  };

  const handleDeleteItem = (ToDoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== ToDoItemName);
    settodoItems(newTodoItems);
  }

  return (
    <center className="todo-content">
      <h1>TODO APP</h1>
      <Adddetails onNewItem={handleNewItem} />
      {todoItems.length <= 0 && <Message />}
      <div className="todo-items">
        <ToDoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>

    </center>
  )
}

export default App
