import React,{Component} from 'react';

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo: "",
      isLoaded: false,
    }
  };

//This method fires when input value changes. EVERY CHANGE IN INPUT
  handleChange = event => {
    this.setStste({
      currentToDo:event.target.value,
    })
  };


// This method fires when the form is submitted
  addTask = event => {
    event.preventDefault();
    this.setState({
      todos:[...this.state.todos,this.state.currentToDo]
    })
  };


  delete = event => {
    this.setState({ list: [] });
    //addEventListener('click',removeEvent);
  };

  resetTasks = () => {
    this.setState(this.state.todos)
  }


render(){
  return (
    <div className ="container">
    <form onSubmit={this.addTask}>
      <label htmlFor = "taskName">Task Name: </label>
      <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here"/>
      <button type="button" value="Delete" onClick={this.delete}> </button>
      <button type="submit"> Add Task </button>
      </form>
    </div>
  );
};
};

export default TodoList;
