import React, {Component} from 'react';
import Input from './Components/Input/Input';
import './App.css';
import Buttons from './Components/Buttons/Buttons'
import Todos from './Components/Todos/Todos'

class App extends Component{  

  constructor(props){
    super(props);    
    this.state={
      todo_lists: []
    };
  }
  
  addHandler(text){
    this.state.todo_lists.push({
                                "id": this.state.todo_lists.length+1,
                                "text":text
                              });
    this.setState({
      todo_lists: this.state.todo_lists
    });
  }
  
  deleteAllHandler(){
    console.log("fgfgf");
    this.setState({
      todo_lists: []
    });
  }
    
  render(){
    return (
      <div className="container-fluid" id="wrapper">
        
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4" id="content">
            <h2>WHAT DO YOU WANT TO DO TODAY?</h2>	
            
            <Input addHandler={this.addHandler.bind(this)}/>
            <Buttons deleteAllHandler={this.deleteAllHandler.bind(this)}/>
            <Todos todo_lists={this.state.todo_lists}/>
            
          </div>
        </div>

        <footer>
          <div className="row pad">
            <div className="col-lg-12 text-center">
              Copyright &copy; 2019 <strong>ToDo App</strong>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
