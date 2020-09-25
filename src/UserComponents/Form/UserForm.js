import React from "react";
import ReactDom from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './UserForm.css';
const axios = require('axios').default;

const formStyle = {
    marginTop : "1em"
}

class UserForm extends ReactDom.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            filledIn : true,
            existingEmail : false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.password !== "" && this.state.email.indexOf('@') > -1){            axios.post('http://localhost:8080/signup', this.state)
            .then(res => {
                console.log(res)
                this.props.createUserFunction(res.data);
            }).catch(res => {
                console.log(res);
                this.setState({
                    existingEmail : true
                })
            })
        }
        else {  
            this.setState({
                filledIn : false
            })
        } 
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }

    render(){
        return (

            
                <form onSubmit={this.handleSubmit}>

                    <h4 id="signup_header">Sign up today!</h4>

                    {(!this.state.filledIn) ? 
                    <div className="alert alert-danger" role="alert">
                        Fill in all the following fields and make sure you are entering a valid email
                    </div> 
                    : <div></div>}

                    {(this.state.existingEmail) ? 
                    <div className="alert alert-danger" role="alert">
                        There already exists an account with that email
                    </div> 
                    : <div></div>}

                        <TextField
                            label="First Name"
                            name="firstName" 
                            id="first_name"
                            variant="outlined"
                            className="col-12" 
                            value={this.state.firstName}
                            onChange={this.handleOnChange}
                            style={formStyle}
                            
                        />
                   
                    

              

                
                        <TextField
                            label="Last Name"
                            name="lastName" 
                            id ="last_name"
                            variant="outlined"
                            className="col-12" 
                            value={this.state.lastName}
                            onChange={this.handleOnChange}
                            style={formStyle}
                        />
                    
             


                        <TextField 
                            label="Email"
                            name="email" 
                            id="email_signup"
                            variant="outlined"
                            className="col-12" 
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            style={formStyle}
                        />
        

            
                        <TextField 
                            label="Password"
                            name="password" 
                            id="password_signup"
                            variant="outlined"
                            className="col-12" 
                            value={this.state.password}
                            onChange={this.handleOnChange}
                            style={formStyle}
                        />
        

                    <Button 
                        variant="contained" 
                        size="large" 
                        color="primary" 
                        className="col-md-3 col-sm-12"
                        style={formStyle}
                        type="submit"
                    >
                        Sign up
                    </Button>

                    <p 
                        id="log_in_text"
                        className="col-12"
                        onClick={this.props.toggleSignupLogin}
                    >
                        Already have an account? Login
                    </p>
                </form>
            
        );
    }

}



export default UserForm;