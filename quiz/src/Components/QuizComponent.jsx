import React, { Component } from 'react'
import "./QuizComponent.css"

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='quiz'>
        <h1 id='title'>Question</h1>
        <p className='start'><span>1</span> of <span>15</span></p>
        <h4 id='question'>Which is the only mammal that can jump ?</h4>
        <div className='option'>
            <button className='option-btn'>Dog</button>
            <button className='option-btn'>Elephant</button>
            <button className='option-btn'>Goat</button>
            <button className='option-btn'>Lion</button>
        </div>
        <div className='action'>
            <button id='previous-btn' className='action-btn'>Previous</button>
            <button id='next-btn' className='action-btn'>Next</button>
            <button id='quit-btn' className='action-btn'>Quit</button>
        </div>
      </div>
    )
  }
}
