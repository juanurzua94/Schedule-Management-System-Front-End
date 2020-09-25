import React from "react";
import ReactDom from "react";
import './Home.css';
import Container from "react-bootstrap/Container"
import AuthenticationForm from "../UserComponents/Form/AuthenticationForm";

const formStyles = {
    justifyContent : "center",
}

class Home extends ReactDom.Component{

    componentDidMount(){
        console.log(this.props.data);

    }

    showSignUpForm() {
        if(!this.props.data.isLoggedIn && this.props.data.isViewingSignUpPage)
            return true;
        return false;
    }


    render(){
       

        return (

            <div id="background_display">
                {this.props.navbar(null)}
                <Container id="authentication_container">
                    
                    <div className="row" style={formStyles}>
                        <AuthenticationForm 
                            signUpForm = {this.showSignUpForm()}
                            authentication = {this.props.authentication}
                            createUserFunction = {this.props.createUserFunction}
                            toggleSignupLogin = {this.props.toggleSignupLogin}
                        />
                    </div>
                </Container>
             
            </div>
            
        )
    }
}

export default Home;