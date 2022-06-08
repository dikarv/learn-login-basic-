

import React, { Component } from "react";
import GlobalType from '../Redux/GlobalType';
import { connect } from 'react-redux';
import Home from '../Home/Home';

class Login extends Component {
  render() {
    const state ={
        email :'',
        password :''
    }

    const handleEmail = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            email : event.target.value
        })
    }

    const handlePassword = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            password : event.target.value
        })
    }

   

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.email === "admin@example.com" && this.state.password === "1234" ) {
            this.props.loged()
           alert("Login berhasil")
           
           
        }else{
            alert("Login gagal")
        }
        console.log("KACANG GAMING",this.props.kacang);
    }

    return (
      <div>
        <>
          {this.props.kacang ? (
            <Home />
          ) : (
            <form onSubmit={handleLogin}>
              <label>
                Email
                <input type={"email"} onChange={handleEmail} />
              </label>
              <label>
                Password
                <input type={"password"} onChange={handlePassword} />
              </label>
              <button type="submit">Login</button>
            </form>
          )}
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        kacang : state.page
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loged : () => dispatch({ type : GlobalType.LOGIN_TRUE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
