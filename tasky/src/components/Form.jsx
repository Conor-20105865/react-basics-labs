import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
        <form onSubmit={props.submit}>

           <label>
        Task title:
        <input type="text" name="title" required className="form-input" onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required className="form-input" onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Priority:
        <select
  className="form-input"
  name="priority"
  value={props.priority || "Low"}
  onChange={props.change}
  style={{
    backgroundColor:
      props.priority === "High"
        ? "#ffcccc"
        : props.priority === "Medium"
        ? "#ffe5b4"
        : "#d4f7d4",
    color:
      props.priority === "High"
        ? "#b30000"
        : props.priority === "Medium"
        ? "#b36b00"
        : "#217a00"
  }}
>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" className="form-input" onChange={(event) => props.change(event)} />
    </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
