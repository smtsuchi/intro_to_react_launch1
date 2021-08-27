import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            redirect: null
        }
    }
    
    runLogin = async (e) => {
        e.preventDefault();
        this.setState({
            redirect: true
        })
        await this.props.handleLogin(e);
    }

    render() {
        if (this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <>
                <div className="form-border-box">
                    <h2>Login</h2>
                    <form onSubmit={(e)=>this.runLogin(e)}>
                        <div className="mb-3">
                            <label htmlFor="id_username" className="form-label">Username :</label>
                            <input type="text" name="username" maxLength="150" className="form-control" id="id_username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_password1" className="form-label">Password :</label>
                            <input type="password" name="password1" autoComplete="new-password" maxLength="150" className="form-control" id="id_password1" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </div>
                <div className="mt-2 text-center">Don't have an account? <Link className="text-decoration-none" to="/register">Register</Link></div>
            </>
        )
    }
}
