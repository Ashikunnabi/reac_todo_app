import React, {Component} from 'react';
import Button from './Button'

class Buttons extends Component {
  render(){
    return (
      <div>         
        <div className="row t10">
          <div className="col-lg-12">
            <div className="btn-toolbar">
                <Button title="DELETE ALL" deleteAllHandler={this.props.deleteAllHandler}/>
            </div>
          </div>          
        </div>
      </div>
    )
  }
}

export default Buttons;
