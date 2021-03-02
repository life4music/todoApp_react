import React, { Component } from "react";
import "./App.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        title: "Zacząć ćwiczyć",
        date: "2021-06-12",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        title: "Wyleczyć zęba",
        date: "2021-03-05",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        title: "Urządzić kuchnię",
        date: "2021-10-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        title: "Dokończyć tatuaż",
        date: "2021-04-01",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    // tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
    console.log(tasks);
  };

  changeStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (title, date, important) => {
    const task = {
      id: this.counter,
      title,
      date,
      important,
      active: true,
      finishDate: null,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;
    return true;
  };

  render() {
    return (
      <>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeStatus}
        />
      </>
    );
  }
}

export default App;
