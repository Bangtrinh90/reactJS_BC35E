import React, { Component } from 'react'
// import style "./DemoState.module.css"

export default class DemoState extends Component {
    username = "Trinh";

    state = {
    login: false, //false: chưa/ true: đã dn
    }

    renderLogin = () => {
        if (this.state.login) {
        return <span>
            Hello! {this.username}</span>

        } 
        
        return <button className='btn btn-success color-pink' onClick={()=>{
            this.handleLogin()
        }}>Login</button>
    }

    handleLogin = () => {
        this.setState({
            login: true
        }, () => {
            console.log(this.state.login);
        })
    }


  render() {
    return (
        <div>
      <nav className="nav justify-content-start text-white bg-dark">
        <div className="nav-link text-light" href="#">
            {this.renderLogin()}
            {/* {this.login ? <span>Hello! {this.username}</span>: <button>Login</button>} */}
            </div>
        </nav>
        <p style={{
            backgroundColor: "green",
            color: '#fff',
            padding: '15px',
            margin: '10px',
        }}>lorendvdvnfnvbfnbvnbfnvnvbn
        </p>

        {/* // <div className={'${style['fz-5xl']} bg-primary'}>abc</div>
        // </div> */}
        </div>
    )
  }
}
  

