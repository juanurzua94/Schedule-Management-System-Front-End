import React from "react";
import ReactDom from "react";
import UserForm from "./UserForm";
import LoginForm from "./LoginForm";


const formStyles = {
    marginTop : "7em"
}

class AuthenticationForm extends ReactDom.Component {

    render(){
        return (
                    <div className="col-md-6 col-sm-" style={formStyles}>
                        <div className="card hadow-lg p-3 mb-5 bg-white rounded"id="authentication_form">
                            <div className="card-body" >
                                { (this.props.signUpForm) ? 
                                <UserForm createUserFunction={this.props.createUserFunction}
                                          toggleSignupLogin = {this.props.toggleSignupLogin}
                                /> : 
                                <LoginForm authentication={this.props.authentication}
                                            toggleSignupLogin = {this.props.toggleSignupLogin}
                                /> }
                            </div> 
                        </div>
                    </div>
                    
               
        )
    }
}

export default AuthenticationForm;