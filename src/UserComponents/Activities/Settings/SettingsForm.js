import React from 'react';
import ReactDOM from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Divider from '@material-ui/core/Divider';


const formStyle = {
    marginTop : "1em"
}


class SettingsForm extends ReactDOM.Component {

    render(){
        return (
            <form onSubmit={this.props.handleUpdateInfo}>

                    <h1 className="col-12" style={{fontFamily: 'Roboto'}}>Personal Info</h1>

                    <Divider className="col-8" style={{backgroundColor: '#1976d2', margin : "0 auto", marginTop: "1em", marginBottom: "1em"}}/>

                        <TextField
                            label="First Name"
                            name="firstName" 
                            id="first_name"
                            variant="outlined"
                            className="col-md-8 col-sm-12" 
                            defaultValue={this.props.user.firstName} 
                            style={formStyle}
                            onChange={this.props.handleUpdateInfoChange}
                        />               
                        <TextField
                            label="Last Name"
                            name="lastName" 
                            id ="last_name"
                            variant="outlined"
                            className="col-md-8 col-sm-12" 
                            defaultValue={this.props.user.lastName}
                            style={formStyle}
                            onChange={this.props.handleUpdateInfoChange}

                        />
                       <TextField 
                            label="Email"
                            name="email" 
                            id="email_signup"
                            variant="outlined"
                            className="col-md-8 col-sm-12" 
                            defaultValue={this.props.user.email}
                            style={formStyle}
                            onChange={this.props.handleUpdateInfoChange}

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
                       Update Info
                    </Button>

            </form>
        )
    }

}

export default SettingsForm;