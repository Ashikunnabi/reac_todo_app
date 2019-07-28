import React, {Component} from 'react';

class Button extends Component {
  render(){
    return (
      <div>         
        <div className="btn-group ml-2">
          <button type="button" className="btn btn-warning" onClick={this.props.deleteAllHandler}>
            <i className="glyphicon glyphicon-trash"></i> {this.props.title}
          </button>
        </div>
      </div>
    )
  }
}

export default Button;
