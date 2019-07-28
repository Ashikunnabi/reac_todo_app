import React, {Component} from 'react';

class Input extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      value: ''
    };
  }
  
  handleChange = (event) =>{
    this.setState({
      value: event.target.value
    });
  }
  
  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.addHandler(this.state.value);
    this.setState({
      value: ''
    });
  }
  
  
  render(){
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>					
          <div className="form-group">
            <div className="input-group">
              <input type="text" className="form-control" 
                     placeholder="Enter todo e.g. Delete junk files"
                     value={this.state.value}
                     onChange={this.handleChange}                     
                     aria-label="Todo" aria-describedby="add-btn"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default" id="add-btn">ADD</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Input;
