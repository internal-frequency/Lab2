import React, { Component } from 'react'

class Checkbox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Fail'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: 'Pass'
        })
      
    }
   
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {<input type='checkbox' name='passFail' value='passFail' onClick={this.clickHandler.bind(this)}></input>}
        
      </div>
    )
  }
}

export default Checkbox;