import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('say Hello')
    }

    sayHello = (name) => {
        alert(name);
    }
    
  render() {
    return (
      <div className='container'>
        <button className='btn btn-danger color-pink' onClick={this.handleClick}>Button</button>

        <input id='text' className='w-25 form-control' onKeyUp={(e) => {
            let tagInput = e.target //document.getElementbyId('text');
            console.log(tagInput.value);
        }} />

        <button className='btn btn-danger color-pink' onClick={(e)=> {
            this.sayHello("Trinh");
        }}>Say Hello</button>
      </div>
    )
  }
}
