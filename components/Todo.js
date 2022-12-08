import React from "react";
import DisplayTodo from "./DisplayTodo";

const Todo = ({
  settodo,
  setdescription,
  addTodo,
  allTask,
  setallTask,
  delTask,
  editTask,
  saveChanges,
  editIndex,
  editedobject,
  editedtodo,
  editeddescription,
  setediteddescription,
  seteditedtodo,
}) => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <center>
          <div className="col-md-6">
            <h1 className="text-light">
              <b>TODOLIST</b>
            </h1>
            <p className="text-info h4">What are your plans for today?</p>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Add your task"
              onChange={(e) => settodo(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Task Description"
              onChange={(e) => setdescription(e.target.value)}
            />
            <button className="btn bg-info mt-3 rounded-pill" onClick={addTodo}>
              <b>Add Task</b>
            </button>
          </div>
          {/* <hr className='text-light '/> */}
        </center>

        <DisplayTodo
          allTask={allTask}
          setallTask={setallTask}
          delTask={delTask}
          editTask={editTask}
          saveChanges={saveChanges}
          editIndex={editIndex}
          editedobject={editedobject}
          editedtodo={editedtodo}
          editeddescription={editeddescription}
          seteditedtodo={seteditedtodo}
          setediteddescription={setediteddescription}
        />
        <small className="text-white text-center">By: Glory Okewole</small>
      </div>
    </div>
  );
};

export default Todo;
