import React from 'react';
import Header from './Components/Header';
import ToDo from './Components/todo';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        input: "",
        view: "todo",
        // checked boolean attr
        checked: false
    };
  }
  render(){
    // if else for state management
    return(
      <div className="container text-center mt-4">
      {/* enter props into header for state dispaly change */}
        <Header />
        <ToDo 
          tasks={this.state.tasks}
          input={this.state.input}
          checked={this.state.checked}
          handleChange={this.handleChange}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
        />
       
     
      </div> 
      
      
    );
  }

  handleChange = (event) => {
    this.setState({
      // takes input and sets equal to what is in input field
      input: event.target.value
    });
  }

  addTask = () => {
    this.setState( state => ({
      // takes original array, adds new input
      tasks: [...state.tasks, state.input],
      
      
      // clears out input field when new item added
      input: ""
    }))
    
  }


  switchModeToDo = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "todo"
    }));
  }

  switchModeAll = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "all"
    }));
  }

  switchModeCompleted = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "completed"
    }));
  }

  taskCompleted = () => {
    
    this.setState( state => ({
      isCompleted: true
    }))
    
  }

  deleteTask = (event) => {
      const index = event.target.dataset.index;
    // this function is what is getting passed to become the new state
      this.setState( state => {
        const tasks = [...state.tasks];
        // remove whatever is at index, and remove 1 item
        tasks.splice(index, 1);
        // console.log("delete task function")
        // tasks will be original array, with whatever is selected removed
        return{
          // returning new updated variable
          tasks: tasks
        };
      })
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }
  componentDidMount() {
    if (localStorage.getItem('tasks') != null){
      var todotasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: todotasks,
      })
    }
  }
}


export default App;
