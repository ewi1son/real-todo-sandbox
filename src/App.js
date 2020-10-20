import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        input: "",
    };
  }
  render(){
    return(
      <div className="container text-center mt-4">
        <h1>To-Do List </h1>
        {/* display how many items in list */}
        Tasks Remaining: {this.state.tasks.length}
        <div>
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.addTask} type="button" className="btn btn-sm btn-outline-primary m-1"> Add Item </button>
        
        {/* create unordered list */}
        <ul>
        {/* map over each task one at a time, print out a li item = value of task */}
                        {/* optional i allows acces to index within array */}
          {this.state.tasks.map((task, i) => 
              <li key={i}>
                  {task}
                      {/* assign data-index to button so it knows which to delete */}
                  <button data-index={i} onClick={this.deleteTask} type="button" className="btn btn-sm btn-outline-danger m-2">Delete</button>
              </li>)
          }
        </ul>
     
      </div> 
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
}


export default App;
