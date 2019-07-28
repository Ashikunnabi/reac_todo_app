import React, {Component} from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      style: 'list-group-item'
    };
  }
  
  handleClick = (event) =>{
    this.setState({
      style: 'list-group-item todo-completed'
    });
  }
  
  render(){
    return (
      <div> 
       <li className={this.state.style} onClick={this.handleClick}>{this.props.content}</li>
      </div>
    )
  }
}

export default Todo;
