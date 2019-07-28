import React, {Component} from 'react';
import Todo from './Todo'

class Todos extends Component {
  render(){
    return (
      <div> 
        <ul className="list-group t20">
          {this.props.todo_lists.map((data, index) =>{
            return <Todo key={data.id} content={data.text}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Todos;
