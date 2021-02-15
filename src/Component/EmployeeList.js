import React, {Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import {Link} from 'react-router-dom';

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

    render() {
        const empTbody = (this.state.employees.map((employee) =>
        <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.emailId}</td>
            <td>
                {/* <button onClick={() => this.viewEmployee(employee.id)}>View</button> */}
                <Link to={'/employee/'+employee.id}>View</Link>
            </td>
        </tr>
    ));
        return(
            <div className="container">
                <h1>EMployee details</h1>
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