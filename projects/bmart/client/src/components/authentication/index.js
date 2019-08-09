import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { withUser } from '../../context/UserProvider.js'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isToggled: false
        }
    }


    toggler = () => this.setState(prevState => ({ isToggled: !prevState.isToggled }))

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        const userCredentials = {
            username: this.state.username,
            password: this.state.password

        }
        this.props.signup(userCredentials)

    }

    handleLogin = e => {
        e.preventDefault()
        const userCredentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(userCredentials)
    }
    render() {
        return (
            <div>
                {!this.state.isToggled ?
                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            btnText="Login"
                        />
                        <p onClick={this.toggler}>Need to create an Account?</p>
                        <p>{this.props.errMsg}</p>
                    </>
                    :
                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignup}
                            btnText="Signup"
                        />
                        <p onClick={this.toggler}>Already have an Account?</p>
                        <p>{this.props.errMsg}</p>
                    </>
                }
            </div>
        )
    }
}


export default withUser(Auth)