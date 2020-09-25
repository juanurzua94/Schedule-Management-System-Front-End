import React from "react";
import ReactDom from "react";
import CustomTable from "./Planner/CustomTable";
import ActivityForm from "./ActivityForm";
import './Activities.css'
import Settings from "./Settings/Settings";
const axios = require("axios").default;

const pages = [
    'create',
    'planner',
    'settings',
    'contact'
]

class Activities extends ReactDom.Component {

    

    constructor(props){
        super(props);
        this.state = {
            activities : [],
            title : "",
            startTime : "",
            endTime : "",
            description : "",
            date : "",
            viewingPage : pages[0],
            firstName : this.props.user.firstName,
            lastName : this.props.user.lastName,
            email : this.props.user.email,
            password : "",
            newPassword : "",
            showAlert : false,
            alertText : "",
            alertClassName : "alert alert-success",
            infoPageShown : false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/user/' + this.props.user.id)
        .then((res) => {
            console.log(res);
            this.setState({
                activities : res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    parseData = () => {
        let updatedData = {};
        for(let prop in this.state){
            if(prop !== 'activities')
                updatedData[prop] = this.state[prop];
        }
        return updatedData;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.parseData());
        axios.post('http://localhost:8080/user/' + this.props.user.id + '/insert', this.parseData())
        .then((res) => {
            console.log(res);
            this.setState({
                activities : res.data,
                endTime : "",
                showAlert : true,
                alertText : "Your activity has been successfully created!",
                alertClassName : "alert alert-success"

            })
        }).catch((err) => {
            console.log(err);
            this.errorMessage("There was an error processing your request. Please try again.");
        });
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    handleDelete = (id) => {
        axios.delete('http://localhost:8080/user/' + this.props.user.id + '/delete/' + id)
        .then((res) => {
            console.log(res)
            this.successMessage("Your activity has been deleted.");
        }).catch((err) => {
            console.log(err)
            this.errorMessage("There was an error processing your request. Please try again.");
        })
    }

    handleUpdateInfoChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    parseInfoData(){
        return {firstName : this.state.firstName, lastName : this.state.lastName, email : this.state.email}
    }

    parsePasswordData(){
        return {password : this.state.password, newPassword : this.state.newPassword}
    }

    handleUpdateInfo = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8080/user/' + this.props.user.id + '/update', this.parseInfoData())
        .then((res) => {
            console.log(res)
            this.props.handleUpdateInfo(res.data);
            this.successMessage("Your account info has been successfully updated!");
        }).catch((err) => {
            console.log(err)           
            this.errorMessage("There was an error processing your request. Please try again.");
        })
    }

    setPassword = (obj) => {
        this.setState({
            password: obj.password,
            newPassword : obj.newPassword
        })
    }

    handleUpdatePassword = (event) => {
        
        axios.put('http://localhost:8080/user/' + this.props.user.id + '/updatePassword', this.parsePasswordData())
        .then((res) => {
            console.log(res)
            this.successMessage("Your password has been successfully updated!");
        }).catch((err) => {
            console.log(err);
            this.errorMessage("There was an error processing your request. Please try again.");
        })
    }

    getCorrectPage = () => {
        if(this.props.stayOnInfoPage && !this.state.infoPageShown){
            this.setState({
                showAlert : true,
                alertClassName : "alert alert-success",
                alertText : "Your account info has been successfully updated!",
                viewingPage : pages[2],
                infoPageShown : true
            })
        }
        if(this.state.viewingPage === pages[0])
            return (<ActivityForm handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>);
        if(this.state.viewingPage === pages[1])
            return (<CustomTable data = {this.state.activities} handleDelete = {this.handleDelete}/>);
        if(this.state.viewingPage === pages[2])
            return (<Settings 
                user = {this.props.user} 
                handleUpdateInfo={this.handleUpdateInfo} 
                handleUpdateInfoChange={this.handleUpdateInfoChange}
                handleUpdatePassword={this.handleUpdatePassword}
                setPassword={this.setPassword}
                errorFunction = {this.errorMessage}
                />);
    }

    showCreatePage = () => {
        if(this.state.viewingPage === pages[2]){
            this.setState({
                viewingPage : pages[0],
                firstName : this.props.user.firstName,
                lastName : this.props.user.lastName,
                email : this.props.user.email,
                showAlert: false
            })

        } else {
            this.setState({
                viewingPage : pages[0],
                showAlert : false
            })
        }
    }

    showPlannerPage = () => {
        if(this.state.viewingPage === pages[2]){
            this.setState({
                viewingPage : pages[1],
                firstName : this.props.user.firstName,
                lastName : this.props.user.lastName,
                email : this.props.user.email,
                showAlert : false
            })

        } else {
            this.setState({
                viewingPage : pages[1],
                showAlert : false
            })
        }
    }

    showSettingsPage = () => {
        this.setState({
            viewingPage : pages[2],
            showAlert : false
        })
    }

    successMessage = (message) => {
        this.setState({
            showAlert : true,
            alertText : message,
            alertClassName : "alert alert-success"
        })
    }

    errorMessage = (message) => {
        this.setState({
            showAlert : true,
            alertText : message,
            alertClassName : "alert alert-danger"
        })
    }

    render(){
        const activePages = {
            showCreatePage : this.showCreatePage,
            showPlannerPage : this.showPlannerPage,
            showSettingsPage : this.showSettingsPage
        }
        // Create alert funciton for getting text and setting up the color of the aler!
        return (
            <div className="custom_container">
                <div id="activity_background"></div>
                {this.props.navbar(activePages)}
                <div className="container-fluid" id="main_content">
                
                {(this.props.fromSignUpForm) ? 
                <div className={this.state.alertClassName} role="alert" style={{textAlign : "left"}}>
                    Your account has successfully been created!
                </div>
                : 
                <div></div>
                }

                
                {(this.state.showAlert) ? 
                <div className="alert alert-success" role="alert" style={{textAlign : "left"}}>
                    {this.state.alertText}
                </div>
                : <div></div>}
                    
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded-lg row" id="activity_card">
                            <div className="card-body">
                                {this.getCorrectPage()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activities;