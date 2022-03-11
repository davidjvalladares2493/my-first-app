import './App.css';
import React, {Component} from 'react';
import tasks2 from './sample/tasks.json';
import Tasks from './components/tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts.js';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';

console.log(tasks2);

class App extends Component {
  state = {
    tasks: tasks2
  }

  addTask = (newTitle, newDesc) => {
    const newTask = {
      title: newTitle,
      description: newDesc,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (idTask) => {
    const nuevasTasks =  this.state.tasks.filter(task => task.id !== idTask);
    this.setState({tasks: nuevasTasks})
    console.log(nuevasTasks);
  }

  checkDone = (idTask) => {
     const nuevasTasks = this.state.tasks.map(task => {
       if(task.id === idTask){
         task.done = !task.done
       }
       return task;
     });
     this.setState({tasks: nuevasTasks})
  }

  render() {
    return ( <div>
              <TaskForm addTask={this.addTask}/>
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone = {this.checkDone}/>

    </div>
  )}
}

export default App;
