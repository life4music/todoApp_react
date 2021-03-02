import React from "react";

const Task = (props) => {
  const { id, title, date, important, active, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? { color: "red" } : { color: "black" }}>
            {title}
          </strong>
          - do <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{title}</strong> <em>(do {date})</em>
          <br />- zrealizowane: <span>{finish} </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
