import React from 'react';
import Header from './Components/Header';
import ToDo from './Components/todo';
import All from './Components/All';
import Completed from './Components/Completed'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        input: "",
        view: "todo",
        isCompleted: false
        // checked boolean attr
        // checked: false
    };
    console.log(this.state.view)
  }
  render(){
    // if else for state management
    if (this.state.view === "todo"){
    return(
      <div className="container text-center mt-4 ">
      {/* enter props into header for state dispaly change */}
        <Header 
          switchModeAll={this.switchModeAll}
          switchModeCompleted={this.switchModeCompleted}
          switchModeToDo={this.switchModeToDo}
        />
        <ToDo 
          tasks={this.state.tasks}
          input={this.state.input}
          isChecked={this.state.checked}
          handleChange={this.handleChange}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          taskCompleted={this.changeStatus}
        />
      </div> 
    );} else if (this.state.view === "all"){
          return(
            <div className="container text-center mt-4 ">
            <Header 
              switchModeAll={this.switchModeAll}
              switchModeCompleted={this.switchModeCompleted}
              switchModeToDo={this.switchModeToDo}
            />
            <All  
              tasks={this.state.tasks}

            />
            </div>
      );} else if (this.state.view === "completed"){
        return(
          <div className="container text-center mt-4 ">
          <Header 
            switchModeAll={this.switchModeAll}
            switchModeCompleted={this.switchModeCompleted}
            switchModeToDo={this.switchModeToDo}
          />
          <Completed  
            tasks={this.state.tasks}
            isCompleted={this.state.isCompleted}
          />
          </div>
        )
      }
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
      tasks: [...state.tasks, {label: state.input, id: Date.now(), status: "active"}],
      // tasks.push(input)
      
      // clears out input field when new item added
      input: ""
    }))
  }

  switchModeToDo = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "todo"
    }));
    console.log(this.state.view)
  }

  switchModeAll = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "all"
    }));
    console.log(this.state.view)
  }

  switchModeCompleted = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "completed"
    }));
    console.log(this.state.view)
  }

  // taskCompleted = (e) => {
  //   // like delete task
  //   // not splice, 
  //   // find index of ID thats being passed to task completed
  //   // capture event in task completed
  //   // temp array

  //   // proxy array
  //   // e.target.id
  //   // modify temp at index
  //   // proxy array
  //   // 
  //   this.setState( state => ({
  //     isCompleted: true
  //   }))
  //   console.log(this.state.isCompleted)
  // }

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
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    console.log(this.state.tasks)
  }

  componentDidMount() {
    if (localStorage.getItem('tasks') != null){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks,
      })
    } console.log("Component Did Mount")
  }

  // attempted to update checked
  changeStatus(id) {
  
    //console.log(this.isChecked)
    console.log(id)
    // let tempArr = this.state.tasks.map(function(item, index){
    //   if (item.id === id) {
    //     item.status = item.status === "active" ? "completed" : "active"
    //   }
    //   return item
    // })
    // this.setState({tasks: tempArr})

  }


}


export default App;
