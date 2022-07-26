import React, { Component } from 'react'

class ArrowBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Pending'
      }
    
    }
   
    clickHandler = () => {
        this.setState({
            message: 'Corrected'
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {<button onClick={() => this.clickHandler()}>Click to Check</button>}
         
      </div>
    )
  }
}

export default ArrowBind