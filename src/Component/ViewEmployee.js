import React, {Component} from 'react';
import EmployeeService from '../Services/EmployeeService';

class ViewEmployee extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => 
                this.setState({
                    employee: res.data.data
                })
            )
    }

    render() {
        return(
            <div className="container">
                <h2 className="text-center">Employee Details</h2>
                <div className="card col-md-6 col-offset-2">
                    <div className="row">
                        <div className="card-text">
                            <label>EMp FIrst Name:</label>
                            <span>{this.state.employee.firstName}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-text">
                            <label>EMp Last Name:</label>
                            <span>{this.state.employee.lastName}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-text">
                            <label>Emp EMail ID:</label>
                            <span>{this.state.employee.emailId}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployee;