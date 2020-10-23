import React from 'react';

class Header extends React.Component{

    render() {
        return(
        <div>
        <h1 className="display-3 mt-4">To-Do List</h1>
        <div>
            <button 
                onClick={this.props.switchModeToDo}
                type="button" 
                className="btn btn-sm btn-outline-secondary my-3 mx-2"
                > 
                To-Do 
            </button>
            
            <button 
                onClick={this.props.switchModeAll} 
                type="button"                    
                className="btn btn-sm btn-outline-secondary my-3 mx-2"
                >
                All 
            </button>

            <button 
                onClick={this.props.switchModeCompleted}
                type="button" 
                className="btn btn-sm btn-outline-secondary my-3 mx-2"
                > 
                Completed 
            </button>


        </div>
        </div>
        
        
        );
    }
  }

  export default Header;