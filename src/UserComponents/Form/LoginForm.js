import React from "react";
import ReactDom from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './LoginForm.css';
const axios = require('axios').default;

const formStyle = {
    marginTop : "1em"
}

class LoginForm extends ReactDom.Component{

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            combination: true
        }
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post('http://localhost:8080/login', this.state)
        .then((res) => {
            console.log("returned : ")
            console.log(res.data);
            this.props.authentication(res.data);
        }).catch((err) => {
            console.log(err);
            this.setState({
                combination: false
            })
        })
    }

    render(){

        return (

        

                <form onSubmit={this.handleSubmit}>
                    <h4 id="login_header">Login</h4>
                    {(!this.state.combination) ? 
                    <div className="alert alert-danger" role="alert">Invalid Username or Password</div> 
                    : <div></div>
                    }

                    
                    <TextField
                        label="Email"
                        id="email_field"
                        name="email"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailIcon/></InputAdornment>,
                        }}
                        variant="outlined"
                        onChange={this.handleOnChange}
                        className="col-12"
                        style={formStyle}
                        value={this.state.email}
                    />

                    <TextField
                            label="Password"
                            id="password_field"
                            name="password"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment>,
                            }}
                            variant="outlined"
                            onChange={this.handleOnChange}
                            type="password"
                            className="col-12"
                            style={formStyle}
                            value={this.state.password}
                    />
                  

                    <Button 
                        variant="contained" 
                        size="large" 
                        color="primary" 
                        className="col-md-3 col-sm-12"
                        style={formStyle}
                        type="submit"
                    >
                        Login
                    </Button>

                    <p 
                        id="sign_up_text"
                        className="col-12"
                       onClick={this.props.toggleSignupLogin}
                    >
                        Do not have an account? Sign up
                    </p>
                    <p 
                        id="forgot_password_text"
                        className="col-12"
                       
                    >
                        Forgot Password?
                    </p>
                </form>
           
                
        )
    }

}

export default LoginForm;