import React from 'react';
import ReactDOM from 'react';
import './App.css';
import UserForm from './UserComponents/Form/UserForm';
import Container from "react-bootstrap/Container";
import CustomNavBar from './NavbarComponents/CustomNavBar';
import Home from './HomeComponent/Home';
import {Route} from "react-router-dom"
import Activities from './UserComponents/Activities/Activities';

class App extends ReactDOM.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      isViewingSignUpPage : true,
      isViewingLoginPage : false,
      user : {},
      fromUserSignUpForm : false,
      stayOnInfoPage : false
    }
  }

  userLoggedIn = (user) => {
    this.setState(
      {
        isLoggedIn : true,
        user : user,
      }
    )
  }

  userLoggedOut = () => {
    this.setState(
      {
        isLoggedIn : false,
        user : {},
        stayOnInfoPage : false
      }
    )
  }

  toggleSignUpLogin = () => {
    this.setState(
      function(prevState) {
        return {
          isViewingSignUpPage : (prevState.isViewingSignUpPage) ? false : true,
          isViewingLoginPage : (!prevState.isViewingLoginPage) ? true : false
        }
      }
    )
  }

  createUserFunction = (user) => {
    this.setState({
      isLoggedIn : true,
      user :  user,
      fromUserSignUpForm : true
    })
  }

  getNavBarSetUp = (props) => {
    return (
      <CustomNavBar 
        toggleSignUpLogin={this.toggleSignUpLogin} 
        isViewingSignUpPage= {this.state.isViewingSignUpPage} 
        isLoggedIn = {this.state.isLoggedIn}
        logout = {this.userLoggedOut}
        links = {props}
      />
    );
  }

  userUpdatedInfo = (user) =>{
    this.setState({
      user : user,
      stayOnInfoPage : true
    })
  }

  render(){

    console.log(this.state);
    const authenticationFunction = (this.state.isLoggedIn) ? this.userLoggedOut : this.userLoggedIn;
    return (
    <div className="App">
      <Route 
        exact={true} 
        path="/" 
        component={() => (!this.state.isLoggedIn) 
        ? <Home 
            data = {this.state} 
            authentication = {authenticationFunction} 
            createUserFunction = {this.createUserFunction}
            navbar = {this.getNavBarSetUp}
            toggleSignupLogin = {this.toggleSignUpLogin}
          /> 
        : <Activities 
            user = {this.state.user}
            navbar = {this.getNavBarSetUp}
            handleUpdateInfo = {this.userUpdatedInfo}
            fromSignUpForm = {this.state.fromUserSignUpForm}
            stayOnInfoPage = {this.state.stayOnInfoPage}
          />}
      />

    </div> 
    )

  }
}

export default App;
