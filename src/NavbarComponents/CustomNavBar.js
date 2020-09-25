import React from "react";
import ReactDom from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';
import './CustomNavBar.css'
import { Container } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';

class CustomNavBar extends ReactDom.Component{


    appropriateAuthenticationTab = (data) =>{
        if(!data.isLoggedIn){
            return (data.isViewingSignUpPage) ? "Login" : "Sign up";
        } else {
            return "Logout"
        }
    }

    appropriateAuthenticationMethod = (data) => {
        return (data.isLoggedIn) ? this.props.logout : this.props.toggleSignUpLogin;
    }


    render(){

        let loginText = this.appropriateAuthenticationTab(this.props);
        let authenticationFunc = this.appropriateAuthenticationMethod(this.props);
        let backgroundStyle = {backgroundColor: (this.props.isLoggedIn) ? '#212121' : ''}

        return (
                    
            <nav className="navbar navbar-expand-lg" id="planner-nav" style={backgroundStyle}>
            <Container>
                <div className="row">
                    <div className="navbar-brand " id="header">Plannerly</div>

                    <button className="navbar-toggler" 
                        data-toggle="collapse" 
                        data-target="#my-nav" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>

                </button>
            
                    <div className="collapse navbar-collapse justify-content-end" id="my-nav">

                        <ul className="navbar-nav">

                        { this.props.isLoggedIn ?
                             <li className="nav-item" >
                                <div className="nav-link" onClick={(e) => {this.props.links.showCreatePage()}}>
                                    Create <CreateIcon/>
                                </div>
                            </li>
                            : <div></div>
                        
                        }


                        { this.props.isLoggedIn ?
                                    <li className="nav-item" >
                                            <div className="nav-link" onClick={(e) => {this.props.links.showPlannerPage()}}>
                                                Planner <MenuBookIcon/>
                                        </div>
                                    </li>
                                    : <div></div>
                        }



                                { this.props.isLoggedIn ?
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={(e) => {this.props.links.showSettingsPage()}}>
                                                    Settings <SettingsIcon/>
                                                </div>
                                            </li>
                                            : <div></div>
                                }

                            <li className="nav-item ">
                                    <div className="nav-link" onClick={authenticationFunc}>{loginText} <AccountCircleIcon/></div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </Container>
          </nav>
            
        )
    }

}
/*
    <div className="custom-nav header" id="planner-nav" style={navStyles}>
                        <ul>
                            <li id="header">
                                <p className="tabs">Plannerly</p>
                            </li>

                            { this.props.isLoggedIn ?
                            <li><div className="tabs">Settings <SettingsIcon/></div></li>
                            : <div></div>
                            }
                            { this.props.isLoggedIn ?
                            <li><div className="tabs">Planner <MenuBookIcon/></div></li>
                            : <div></div>
                            }
                            <li>
                                <div className="tabs">Contact Us <ContactMailIcon/></div>
                            </li>
                            
                             <li>
                                 <div className="tabs" onClick={authenticationFunc}>{loginText} <AccountCircleIcon/></div>
                             </li>
                             
                        </ul>   
                    </div>
*/
export default CustomNavBar;