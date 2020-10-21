import React from 'react';

class Header extends React.Component{

    render() {
        return(
        <div>
        <h1>To-Do List</h1>
        <div>
            <button 
                onClick={this.props.switchModeToDo}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                To-Do 
            </button>
            
            <button 
                onClick={this.props.switchModeAll} 
                type="button"                    
                className="btn btn-sm btn-outline-secondary m-1"
                >
                All 
            </button>

            <button 
                onClick={this.props.switchModeCompleted}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                Completed 
            </button>


        </div>
        </div>
        
        
        );
    }
  }

  export default Header;