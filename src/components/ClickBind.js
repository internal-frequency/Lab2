import React, { Component } from 'react'

class ClickBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Pending'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: 'Corrected'
        })
      
    }
   
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {<button onClick={this.clickHandler.bind(this)}>Click to Check</button>}
        
      </div>
    )
  }
}

export default ClickBind