import React from "react";
import ReactDom from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const formStyles = {
    margin : "0 auto",
    marginTop: "1em",
    marginBottom: "1em"
};

class ActivityForm extends ReactDom.Component{

    render(){
        return (
            <form onSubmit={this.props.handleSubmit} 
            id="activity_form" className="row" 
            style={{justifyContent:"center"}}
            >
                <h1 className="col-12" style={{fontFamily: 'Roboto'}}>Add to your Planner</h1>

                <Divider className="col-8" style={{backgroundColor: '#1976d2', margin : "0 auto", marginTop: "1em", marginBottom: "1em"}}/>

                <TextField
                    className="col-md-8 col-sm-12"
                    id="title_field"
                    label="Title"
                    variant="outlined"
                    name="title"
                    InputLabelProps={{
                        shrink: true,
                        }}
                    style={formStyles}
                    onChange = {this.props.handleChange}
                />
                
                <TextField
                    id="date_field"
                    name="date"
                    label="date"
                    type="date"
                    className="col-md-8 col-sm-12"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    placeholder="Date"
                    variant="outlined"
                    style={formStyles}
                    onChange = {this.props.handleChange}
                />
                 <TextField
                    id="time_field"
                    label="Time"
                    name="startTime"
                    type="time"
                    placeholder="Choose the time"
                    className="col-md-8 col-sm-12"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    variant="outlined"
                    style={formStyles}
                    onChange = {this.props.handleChange}
                />
                
                <TextField
                    id="end_time_field"
                    label="End Time (Optional)"
                    name="endTime"
                    type="time"
                    placeholder="Choose the ending time"
                    className="col-md-8 col-sm-12"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    variant="outlined"
                    style={formStyles}
                    onChange = {this.props.handleChange}
                />
                <TextField
                    className="col-md-8 col-sm-12"
                    multiline
                    rows = {4}
                    id="description_field"
                    label="Description"
                    variant="outlined"
                    name="description"
                    InputLabelProps={{
                        shrink: true,
                        }}
                    style={formStyles}
                    onChange = {this.props.handleChange}
                />

                <div className="col-12"></div>
                
                <Button 
                    color="primary" 
                    size="large"
                    className="col-md-2 col-sm-12"
                    variant="contained"
                    style={formStyles}
                    type="submit"
                >
                    Add
                </Button>
            </form>
        )
    }

}

/*

<div className="form__group field col-md-5 col-sm-12">
                        <label for="title" className="form__label">Title</label>
                        <input 
                            name="title" 
                            type="text" 
                            className="form__field" 
                            id="title"
                            onChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="form__group field col-md-5 col-sm-12">
                        <label for="date" className="form__label">Date</label>
                        <input 
                            name="date" 
                            type="date" 
                            className="form__field" 
                            id="date"
                            onChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="form__group field col-md-5 col-sm-12">
                        <label for="start_time" className="form__label">Start Time</label>
                        <input 
                            name="startTime" 
                            type="time" 
                            className="form__field" 
                            id="start_time"
                            onChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="form__group field col-md-5 col-sm-12">
                        <label for="end_time" className="form__label">End Time</label>
                        <input 
                            name="endTime" 
                            type="time" 
                            className="form__field" 
                            id="end_time"
                            onChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="form__group field col-md-11 col-sm-12">
                        <label for="description" className="form__label">Description</label>
                        <input 
                            name="description" 
                            type="text" 
                            className="form__field" 
                            id="description"
                            onChange = {this.props.handleChange}
                        />
                    </div>

*/
export default ActivityForm;
