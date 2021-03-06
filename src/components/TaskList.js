import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  // sortowanie listy
  if (done.length >= 2) {
    // po dacie malejąco
    done.sort((a, b) => b.finishDate - a.finishDate);
  }
  if (active.length >= 2) {
    // po nazwie roznąco
    active.sort((a, b) => {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : "Brak zadań do zrobienia"}
      </div>

      <hr />

      <div className="done">
        <h2>
          Zadania zrobione <em>({done.length})</em>
        </h2>
        {done.length > 3 && (
          <span style={{ fontSize: 11 }}>
            Wyświetlone jedynie 3 ostatnie elementy
          </span>
        )}
        {doneTasks.slice(0, 3)}
      </div>
    </>
  );
};

export default TaskList;
