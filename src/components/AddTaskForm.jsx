const AddTaskForm = ({ newTodo, setNewTodo, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default AddTaskForm;
