import React, {Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import {Link} from 'react-router-dom';
import '../App.css';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
    }


    componentDidMount() {
        EmployeeService.getEmployees().then(response => {
            this.setState({
                employees: response.data.data
            })
        })
    }

    // viewEmployee(id) {
    //     this.props.history.push('/employee/'+id);
    // }

    addButtonClick = () => {
        this.props.history.push('/create-employee');
    }

    deleteEvent = (empId) => {
        EmployeeService.deleteEmployee(empId).then(res => {
            const empData = this.state.employees.filter(employee => employee.id !== empId)
            this.setState({
                employees: empData
            })
        })
    }

    render() {
        const empTbody = (this.state.employees.map((employee) =>
        <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.emailId}</td>
            <td>
                {/* <button onClick={() => this.viewEmployee(employee.id)}>View</button> */}
                <Link to={'/employee/'+employee.id}>View</Link>
                <Link to={'/edit-employee/'+employee.id}>Edit</Link>
                <button className="btn btn-primary" onClick={() => this.deleteEvent(employee.id)}>Delete</button>
            </td>
        </tr>
    ));
        
        return(
            <div className="container">
                <h1>EMployee details</h1>
                <button className="btn btn-primary marginBottom"  onClick={this.addButtonClick} >Add Employee</button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empTbody}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList;