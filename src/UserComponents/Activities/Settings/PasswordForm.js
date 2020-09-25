import React from 'react';
import ReactDOM from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Divider from '@material-ui/core/Divider';

const formStyle = {
    marginTop : "1em"
}


class PasswordForm extends ReactDOM.Component {

    constructor(props){
        super(props);
        this.state = {
            password : "",
            newPassword : "",
            confirmPassword : ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.newPassword !== this.state.confirmPassword)
            this.props.errorFunction("Error. Your passwords do not match.")
        else {
            this.props.setPassword(this.state);
            this.props.handleSubmit(e);
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>

                <h1 className="col-12" style={{fontFamily: 'Roboto'}}>Password</h1>

                <Divider className="col-8" style={{backgroundColor: '#1976d2', margin : "0 auto", marginTop: "1em", marginBottom: "1em"}}/>

                    <TextField
                        label="Current Password"
                        name="password" 
                        variant="outlined"
                        className="col-md-8 col-sm-12"
                        style={formStyle}
                        onChange={this.handleChange}
                    />               
                    <TextField
                        label="New Password"
                        name="newPassword" 
                        variant="outlined"
                        className="col-md-8 col-sm-12"
                        style={formStyle}
                        onChange={this.handleChange}
                    />
                <TextField 
                        label="Confirm Password"
                        name="confirmPassword" 
                        id="email_signup"
                        variant="outlined"
                        className="col-md-8 col-sm-12" 
                        style={formStyle}
                        onChange={this.handleChange}
                    />

                <div className="col-12"></div>
                <Button 
                    variant="contained" 
                    size="large" 
                    color="primary" 
                    className="col-md-2 col-sm-12"
                    style={formStyle}
                    type="submit"
                >
                Update Password
                </Button>

            </form>
        )
    }

}

export default PasswordForm;