import React from "react";
import ReactDom from "react";
import Row from "./Row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FooterTable from "./FooterTable";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class CustomTable extends ReactDom.Component {

    constructor(props){
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5,
        }
    }

    adjustTable = (page, rowsPerPage) => {
        this.setState({
            page : page,
            rowsPerPage : rowsPerPage,

        })
    }

    getCorrectRows = (page, rowsPerPage) => {
        const rows = this.props.data.map((element) => 
            <Row 
                key = {element.id}
                values = {element}
                handleDelete = {this.props.handleDelete}
             />
        );
        let start = page * rowsPerPage;
        let end = start + rowsPerPage;
        return rows.slice(start, end);
    }

    sortByTitle = () => {
        this.props.data.sort((a, b) => (a.title > b.title) ? 1 : -1)
        this.adjustTable(0, this.state.rowsPerPage);
    }

    sortByDate = () => {
        this.props.data.sort((a, b) => {
            let a1 = new Date(a.date);
            let b1 = new Date(b.date);

            return (a1 > b1) ? 1 : -1;
        })
        this.adjustTable(0, this.state.rowsPerPage);
    }

    sortByFrom = () => {

        this.props.data.sort((a, b) => {
            let a1 = new Date(a.startTime);
            let b1 = new Date(b.startTime)

            return (a1.getTime() > b1.getTime()) ? 1 : -1;
        })

        this.adjustTable(0, this.state.rowsPerPage);
    }

    sortByTo = () => {
        this.props.data.sort((a, b) => {
            if(a.endTime == null && b.endTime == null)
                return 1;
            if(a.endTime == null)
                return -1;
            if(b.endTime == null)
                return 1;

            let a1 = new Date(a.endTime);
            let b1 = new Date(b.endTime)

            return (a1.getTime() > b1.getTime()) ? 1 : -1;
        })
        
        this.adjustTable(0, this.state.rowsPerPage);
    }


    render() {
        return (
            <div className="col-12">
                <h1 className="col-12" style={{fontFamily: 'Roboto'}}>Planner</h1>
                <Divider className="col-8" style={{backgroundColor: '#1976d2', margin : "0 auto", marginTop: "1em", marginBottom: "1em"}}/>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right"><Button color="primary" onClick={this.sortByTitle}>Title</Button></TableCell>
                                <TableCell align="right"><Button color="primary" onClick={this.sortByDate}>Date</Button></TableCell>
                                <TableCell align="right"><Button color="primary" onClick={this.sortByFrom}>From</Button></TableCell>
                                <TableCell align="right"><Button color="primary" onClick={this.sortByTo}>To</Button></TableCell>
                                <TableCell align="right"><Button color="primary">Description</Button></TableCell>
                                <TableCell align="right"><Button color="primary">Action</Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.getCorrectRows(this.state.page, this.state.rowsPerPage)}
                        </TableBody>
                        <FooterTable 
                            rows={this.props.data} 
                            adjustTable={this.adjustTable}
                            page = {this.state.page}
                            rowsPerPage = {this.state.rowsPerPage}
                        />
                    </Table>
                </TableContainer>
            </div>
        )
    }
}


export default CustomTable;