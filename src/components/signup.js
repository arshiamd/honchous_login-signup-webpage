import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter your Username" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="tel" className="form-control" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <div className="account text-center">
                   Already have an account?<Link className="nav-link" to={"/sign-in"}>login here</Link>
                </div>
            </form>
        );
    }
}