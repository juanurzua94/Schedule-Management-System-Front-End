import React from 'react';
import ReactDOM from 'react';
import SettingsForm from './SettingsForm';
import PasswordForm from './PasswordForm';
import Divider from '@material-ui/core/Divider';
class Settings extends ReactDOM.Component {

    render(){
        
        return (
            <div>
                <SettingsForm user={this.props.user} handleUpdateInfo={this.props.handleUpdateInfo} handleUpdateInfoChange={this.props.handleUpdateInfoChange}/>
                <Divider style={{marginTop: '2em', marginBottom: '2em'}}/>
                <PasswordForm
                    handleSubmit={this.props.handleUpdatePassword} 
                    setPassword={this.props.setPassword}
                />
            </div>
        )
    }
}

export default Settings;