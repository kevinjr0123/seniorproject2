import React, { Component } from "react";
import GoogleLoginComponent from "./googlebutton.component";


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placedholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placedholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                <div className="App container">
                    <GoogleLoginComponent />
                </div>

            </form>
        );
    }
}