import React, { Component } from 'react'

export default class Display extends Component {
  constructor(){
    super()

  }
  render(){
    return(
      <div className='value'>
        {this.props.display}
      </div>
    )
  }
}
