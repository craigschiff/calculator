// for evaluate ideally would refactor too - test that function when have it running

// where to calc display? on evaluators or on mount?
// TESTS!

import React, { Component } from 'react'
import Display from './display'
import Inputs from './inputs'

const doMath = {
  '+': function(x, y) {return x + y},
  '-': function(x, y) {return x - y},
  '/': function(x, y) {return x / y},
  '*': function(x, y) {return x * y},
  '%': function(x) {return parseFloat((x/100).toFixed(10))},
  '+/-': function(x) { return (x * -1) }
}


export default class Calculator extends Component {
  constructor(){
    super()
    this.state = {
      termOne: 0,
      termTwo: 0,
      status: 'none',
      answer: 0,
      answerStatus:'none',
      display: 0
    }
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleEvaluate = this.handleEvaluate.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleSignAndPercent = this.handleSignAndPercent.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

  }
  handleNumberClick(event){
    event.preventDefault()
    let value = event.target.value
    let status = this.state.status
    let termOne = this.state.termOne
    let termTwo = this.state.termTwo
    let answer = this.state.answer
    if (status == 'answer'){
      this.setState({status: 'none'})
    }
    if (value == '.'){
      let display = this.state.display
      if (display.includes('.')){
        return
      }
    } else {
      value = parseFloat(value)
    }
    switch (status) {
      case 'none':
        if (!termOne){
          this.setState({termOne: value, display: value})
        } else if (!termTwo) {
        termOne = `${termOne}${value}`
        this.setState({termOne: termOne, display: termOne})
        }
        break
      // case 'answer':

      default:
        if (termOne && termTwo){
          termTwo = `${termTwo}${value}`
          this.setState({termTwo: termTwo, display: termTwo})
        } else if (termOne){
          this.setState({termTwo: value, display: value})
        } else {
          this.setState({termOne: value, display: value})
        }
    }
  }
  handleClear(event){
    event.preventDefault()
    let termOne = this.state.termOne
    let termTwo = this.state.termTwo
    let answer = this.state.answer
    let status = this.state.status
    this.setState({display: 0, status: 'none', answer: 0, answerStatus: status})
    if (termTwo){
      this.setState({termOne: termTwo, termTwo: 0})
    } else {
      this.setState({termOne: 0})
    }
  }
  handleOperation(event){
    let termOne
    if (this.state.termOne && this.state.termTwo) {
      termOne = this.handleEvaluate(event)
    } else {
      termOne = this.state.termOne
    }
    event.preventDefault()
    let operation = event.target.name
    let status = this.state.status
    let termTwo = this.state.termTwo
    let answer = termOne
    this.setState({termOne: termOne})
    if (status == 'answer'){
      termOne = this.state.answer
      this.setState({termOne: termOne})
    } else if (status == 'none'){
      if (termTwo){
        this.setState({termOne: termTwo, termTwo: 0, answerStatus: 'none'})
      }
    }

    switch (operation) {
      case 'multiply':
        this.setState({status: '*'})
        return
      case 'divide':
        this.setState({status: '/'})
        return
      case "add":
        this.setState({status: '+'})
        return
      case 'subtract':
        this.setState({status: '-'})
        return
      default:
        return
    }
  }
  handleKeyDown(event){
    debugger
  }
  performOperation(status){
    let termOne = parseFloat(this.state.termOne)
    let termTwo = parseFloat(this.state.termTwo)
    let answer = this.state.answer
    if (termOne && termTwo){
      answer = doMath[status](termOne, termTwo)
      this.setState({
        answer: answer,
        termOne: termTwo,
        termTwo: 0
      })
    } else if (answer && termOne){
      answer = doMath[status](termOne, answer)
      this.setState({
        answer: answer
      })
    } else if (termOne){
      answer = doMath[status](termOne, termOne)
      this.setState({
        answer: answer
      })
    }
    return answer
  }
  handleEvaluate(event){

    event.preventDefault()
    let status = this.state.status
    let answer
    if (status == 'answer' || status == 'none'){
      status = this.state.answerStatus
    }
    if (status == 'answer' || status == 'none'){
      answer = this.state.termOne
      this.setState({answer: answer})
    } else {
      answer = this.performOperation(status)
    }
    this.setState({display: answer, status: 'answer', answerStatus: status})
    return answer
  }
  handleSignAndPercent(event){
    event.preventDefault()
    let operator = event.target.name
    let termOne = this.state.termOne
    let termTwo = this.state.termTwo
    let answer = this.state.answer
    let display = this.state.display
    let value
    switch (display) {
      case termOne:
        value = doMath[operator](termOne)
        this.setState({termOne: value})
        break
      case termTwo:
        value = doMath[operator](termTwo)
        this.setState({termTwo: value})
        break
      case answer:
        value = doMath[operator](answer)
        this.setState({termOne: value})
        break
    }
    this.setState({display: value})
  }


  render(){
    return(
      <div className="calc">
        <h2>Welcome to the Calculator</h2>
        <div className="display">
          <Display display={this.state.display} />
        </div>
        <div className="inputs">
          <Inputs onNumber={this.handleNumberClick}
            onPercentSign={this.handleSignAndPercent}
            onClear={this.handleClear}
            onEvaluate={this.handleEvaluate}
            onOperation={this.handleOperation}
            clear={(this.state.termOne || this.state.answer) ? 'C' : 'AC'}
            />
        </div>



      </div>



    )
  }

}
