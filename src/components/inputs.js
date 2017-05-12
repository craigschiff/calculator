import React, { Component } from 'react'

export default class Inputs extends Component {
  constructor(){
    super()

  }
  render(){

    return(
      <div>
        <div>
          <button className='buttons' className='top-operation' onClick={this.props.onClear} name='clear'>{this.props.clear}</button>
          <button className='buttons' className='top-operation' onClick={this.props.onPercentSign} name='+/-'><sup id="plus">+</sup>⁄<sub id="minus">-</sub></button>
          <button className='buttons' className='top-operation' onClick={this.props.onPercentSign} name='%'>%</button>
          <button className='buttons' className='operation' onClick={this.props.onOperation} name='divide'>÷</button><br />
        </div>
        <div className='container'>
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='7'>7</button>
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='8'>8</button>
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='9'>9</button>
          <button className='buttons' className='operation' onClick={this.props.onOperation} name='multiply'>x</button><br />
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='4'>4</button>
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='5'>5</button>
          <button className='buttons' className='nums' onClick={this.props.onNumber} value='6'>6</button>
          <button className='buttons' className='operation' onClick={this.props.onOperation} id='subtract' name='subtract'>-</button><br />
          <button className='buttons'  className='nums' onClick={this.props.onNumber} value='1'>1</button>
          <button className='buttons'  className='nums' onClick={this.props.onNumber} value='2'>2</button>
          <button className='buttons'  className='nums' onClick={this.props.onNumber} value='3'>3</button>
          <button className='buttons'  className='operation' onClick={this.props.onOperation} name='add'>+</button><br />
          <button className='buttons' id='zero' onClick={this.props.onNumber} value='0'>0</button>
          <button className='buttons' className='nums' onClick={this.props.onNumber} name='decimal' value='.'>.</button>
          <button className='buttons' className='operation' onClick={this.props.onEvaluate} name='solution'>=</button>
        </div>
      </div>
    )
  }
}

// <div className='rowOne'>
//   <button onClick={this.handleNumberClick} value='7'>7</button>
//   <button onClick={this.handleNumberClick} value='8'>8</button>
//   <button onClick={this.handleNumberClick} value='9'>9</button>
// </div>
// <div className='rowTwo'>
//   <button onClick={this.handleNumberClick} value='4'>4</button>
//   <button onClick={this.handleNumberClick} value='5'>5</button>
//   <button onClick={this.handleNumberClick} value='6'>6</button>
// <div/>
// <div className='rowThree'>
//   <button onClick={this.handleNumberClick} value='1'>1</button>
//   <button onClick={this.handleNumberClick} value='2'>2</button>
//   <button onClick={this.handleNumberClick} value='3'>3</button>
// </div>
// <div className='rowFour'>
//   <button onClick={this.handleNumberClick} value='0'>0</button>
//
// </div>
