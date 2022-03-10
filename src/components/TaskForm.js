import React, {Component} from 'react';

export default class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  }

//Podemos mantener la funcion flecha sin
//parentesis 'onSubmit = (e) => {}' si la funcion solo recibe un parametro
  onSubmit = e => {
    console.log(this.state);
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  }

  onChange = e => {
    console.log(e.target.name +' '+ e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    //this.props.addTask('Titulo nuevo', 'Descripcion nueva');
    return(<form onSubmit={this.onSubmit}>
              <input type="text"
              name="title"
              placeholder="Write a Task"
              onChange = {this.onChange}
              value={this.state.title}/>
              <br/>
              <br/>
              <textarea placeholder="Write a description"
              name="description"
              onChange = {this.onChange}
              value={this.state.description}/>
              <input type="submit"/>
           </form>
    )
  }
}
