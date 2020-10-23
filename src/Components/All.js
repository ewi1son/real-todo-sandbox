import React from 'react';

class All extends React.Component{

  componentDidMount() {
    const pullFrom = localStorage.getItem('label')
    console.log("All Component Did Mount")
    console.log(pullFrom)
      
  }

    render() {
        // var C = localStorage.getItem(isCompleted: )
      return(
      <div>
        ALL 
    
      </div>
      
      );
    }
  }

export default All