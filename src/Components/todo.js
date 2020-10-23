import React from 'react';

class ToDo extends React.Component{
    
    render() {
      return(
       //display how many items in list 
       <div>
       <h3>Tasks Remaining: {this.props.tasks.length}</h3>
       <div>
       
        <input onChange={this.props.handleChange} 
                value={this.props.input}         
                placeholder="Enter here"
        />

         <button 
            onClick={this.props.addTask} 
            type="button" 
            className="btn btn-sm btn-outline-primary m-1"
         > 
         Add Item 
         </button>
       
       {/* create unordered list */}
       {/* map over each task one at a time, print out a li item = value of task */}
                       {/* optional i allows acces to index within array */}
       <ul>
         {this.props.tasks.map((task, i) => 
             /// was an <li> component 
             <div key={i}>
             <input 
                type="checkbox" 
                // defaultChecked={task.isCompleted}
                // make function
                onChange={()=>this.props.taskCompleted(task.id)}
                className="form-check-input" 
                id= {i}             
             />
             <label className="form-check-label"></label>
                 {task.label}
                 
                     {/* assign data-index to button so it knows which to delete */}
                 {/* checkbox  */}
                 <button 
                    data-index={i} 
                    onClick={this.props.deleteTask} 
                    type="button" 
                    className="btn btn-sm btn-outline-danger m-2"
                 >Delete
                 </button>
             </div>
             )
         }
       </ul>

       </div>
       </div>
      ); 
    }
  }

  export default ToDo;