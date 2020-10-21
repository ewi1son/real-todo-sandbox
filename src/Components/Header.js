import React from 'react';

class Header extends React.Component{

    render() {
        return(
        <div>
        <h1>To-Do List</h1>
        <div>
        <button type="button" className="btn btn-sm btn-outline-secondary m-1">
         All </button>
        <button type="button" className="btn btn-sm btn-outline-secondary m-1"> Completed </button>
        <button type="button" className="btn btn-sm btn-outline-secondary m-1"> To-Do </button>
        </div>
        </div>
        
        
        );
    }
  }

  export default Header;