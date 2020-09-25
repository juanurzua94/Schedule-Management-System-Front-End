import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

function Row(props){

    const [open, setOpen] = React.useState(false);

    const date = new Date(props.values.date).toLocaleString().split(',')[0];

    const convertToNormalTime = (time) => {
        console.log(time)
        let newTime = time.split(':');
        let hours = newTime[0], minutes = newTime[1];
        let amPm = (hours > 12) ? "PM" : "AM";
        let newHours = (hours > 12) ? (hours - 12) : hours
        newHours = (newHours == '00') ? '12' : newHours;
        return newHours + ':' + minutes + amPm;
    }

    return (
               <React.Fragment>
                    <TableRow>
                        <TableCell align="right" component="th" scope="row">{props.values.title}</TableCell>
                        <TableCell align="right">{date}</TableCell>
                        <TableCell align="right">{convertToNormalTime(props.values.startTime)}</TableCell>
                        <TableCell align="right">{props.values.endTime ? convertToNormalTime(props.values.endTime) : "N/A"}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="expand row" size="small" onClick= {()=>(setOpen(!open))}>
                                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                            </IconButton>
                        </TableCell>
                        <TableCell align="right"><Button color="secondary" variant="outlined" onClick={e => props.handleDelete(props.values.id)}>Delete</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0, textAlign: "center" }} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box margin={1}>
                                    <h6>
                                        {props.values.description}
                                    </h6>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </React.Fragment> 
    )
    
}
/*<TableCell align="right">{this.props.values.description}</TableCell>*/
export default Row;