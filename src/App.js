import logo from "./logo.svg";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import UpdateTaskForm from "./components/UpdateTaskForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Todo from "./components/ToDo";

function App() {
  //State Part
  const [todo, setTodo] = useState([]);

  //Temp Data
  const [newTodo, setNewTodo] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Method Data

  const addTask = () => {
    if (newTodo) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTodo, status: false };
      setTodo([...todo, newEntry]);
      setNewTodo("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };

  const markDone = (id) => {
    let newTask = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const updateTask = () => {
    let filterRecords = [...todo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  return (
    <div className="App">
      <br></br>
      <h2> React Todo List Ipul</h2>
      <br></br>

      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTask={addTask}
        />
      )}

      {/* Display Task */}
      {todo && todo.length ? "" : "There is no record saved...."}
      <Todo
        todo={todo}
        markDone={markDone}
        deleteTask={deleteTask}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
