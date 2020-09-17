import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
           
            <div className="account text-center">
                   Don't have an account?<Link className="nav-link" to={"/sign-up"}>Signup here</Link>
            </div>
            
        </form>
                
    
        );
    }
}