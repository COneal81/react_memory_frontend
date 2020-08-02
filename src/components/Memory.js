// a user has many memories
import React, { Component } from 'react';

class Memory extends Component {


  handleOnClick = () => {
    this.props.deleteMemory(this.props.memory.id)
  }

  render() {
    return (
      <div>
        
          {this.props.memory.title}
       
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Memory