import React, {Component} from 'react';
import PropTypes from 'prop-types';

//className="red"
class Task extends Component {

  StyleCompleted() {
    return{
      fontSize: '20px',
      color: this.props.task.done ? 'green' : 'red',
      textDecoration: this.props.task.done ? 'line-through' : 'none',
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      fontSize: '14px',
      borderRadius: '5px'

    }
  }

  render() {
    const {task} = this.props;
    //const redColor = {background: 'green'}; //style={redColor}
    return <p style={this.StyleCompleted()}>
              {task.id} -
              {task.title} -
              {task.description} -
              {task.done}
              <input type="checkbox" onChange = {this.props.checkDone.bind(this, task.id)}/>
              <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
              x
              </button>
          </p>
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default Task;
