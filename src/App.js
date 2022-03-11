//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //Otra forma de impoirtar los componentes: import React, {Component} from 'react';
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

/**************
<div>
  <Router>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/posts">Posts</Link>
          <Route path="/" render = {() => {
            return (<div>
                      <TaskForm addTask={this.addTask}/>
                      <Tasks
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTask}
                        checkDone = {this.checkDone}/>
                    </div>
                  )
            }} > </Route>

          <Route path= "/posts" component={Posts}/>
  </Router>
  <Posts/>
</div>

****************/

/*function Helloworld(props) {
  console.log(props);
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}*/

/*
class Helloworld extends React.Component { //En vez de React.Component podemos poner solamente Component

  state = {
    show: true
  }

  //usamos funcion flecha para no utilizar en onClick el this.toggleShow.bind(this)
  //Y asi no utilizar la funcion flecha como un metodo toggleShow()
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return <h1>
        There are no elements
          <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>

    }
  }
}

function App() {
  return (
    <div>This is my component:
    <Helloworld mytext="Hello David" subtitle="Jennifer"/>
    <Helloworld mytext="Hola Jose" subtitle="Draskovitz"/>
    <Helloworld mytext="Ciao Valladares" subtitle="component three"/>
    </div>
  );
}

export default App;

*/

/***Componente creado como funcion flecha igual que el de la funcion Helloworld() ***/

//const App = () => <div>This is my component: <Helloworld/></div>

/***Componente creado como clase igual que la funcion Helloworld() ***/

/*class App extends React.Component{
  render(){
    return  <div>This is my component: <Helloworld/> </div>
  }
} */


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
