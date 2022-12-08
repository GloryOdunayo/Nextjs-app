import React, { useState } from "react";
import Todo from "./Todo";

const Todoapp = () => {
  const [todo, settodo] = useState("");
  const [description, setdescription] = useState("");
  const [allTask, setallTask] = useState([]);
  const [editIndex, seteditIndex] = useState(0);
  const [editedobject, seteditedobject] = useState({});
  const [editedtodo, seteditedtodo] = useState("");
  const [editeddescription, setediteddescription] = useState("");

  const addTodo = () => {
    let newTask = { todo, description };
    setallTask([...allTask, newTask]);
  };
  const del = (i) => {
    setallTask(allTask.filter((task, index) => i != index));
  };
  const editTask = (i) => {
    let selectedTask = allTask[i];
    seteditedtodo(selectedTask.todo);
    setediteddescription(selectedTask.description);
    seteditIndex(i);
    seteditedobject(selectedTask);
  };
  const saveChanges = () => {
    let saveChanges = { todo: editedtodo, description: editeddescription };
    let newtask = [...allTask];
    newtask[editIndex] = saveChanges;
    setallTask(newtask);
  };

  return (
    <>
      <div>
        <Todo
          settodo={settodo}
          setdescription={setdescription}
          addTodo={addTodo}
          setallTask={setallTask}
          allTask={allTask}
          delTask={del}
          editTask={editTask}
          editIndex={editIndex}
          saveChanges={saveChanges}
          editedobject={editedobject}
          editedtodo={editedtodo}
          editeddescription={editeddescription}
          setediteddescription={setediteddescription}
          seteditedtodo={seteditedtodo}
        />
      </div>
    </>
  );
};

export default Todoapp;
