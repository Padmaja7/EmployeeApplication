import React, {Component} from 'react';
import EmployeeService from '../Services/EmployeeService';

class CreateEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            firstName : '',
            lastName : '',
            emailId: ''
        }
    }

    componentDidMount() {
        if(this.state.id !== undefined && this.state.id > 0) {
            EmployeeService.getEmployeeById(this.state.id).then(res => 
                    this.setState({
                        firstName: res.data.data.firstName,
                        lastName: res.data.data.lastName,
                        emailId: res.data.data.emailId
                    })
                )
        }
    }

    onChangeEvent = (event, type) => {
        event.preventDefault();
        if (type === 'firstName') {
            this.setState({
                firstName : event.target.value
            })
        } else if (type === 'Lastname') {
            this.setState({
                lastName : event.target.value
            })
        } else if (type === 'Email') {
            this.setState({
                emailId : event.target.value
            })
        }
    }


    saveEvent = (e) => {
        e.preventDefault();
        const employee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            emailId : this.state.emailId
        }
        if(this.state.id !== undefined && this.state.id > 0) {
            EmployeeService.editEmployee(this.state.id, employee).then(res => 
                    this.props.history.push('/employees')
                )
        } else {
            EmployeeService.createEmployee(employee).then((res) =>
            this.props.history.push("/employees") 
            )
        }
    }


    cancelEvent = () => {
        this.props.history.push("/employees");
    }

    render(){
        return(
            <div className="container">
                <div className ="card">
                    <h2> Create Employee </h2>
                </div>
                <div className = "card-body form-group col-md-6 md-offsest-3">
                    <form>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input name="firstName" value={this.state.firstName} className="form-control" onChange={(event) => this.onChangeEvent(event, 'firstName')} />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input name="lastName" value={this.state.lastName} className="form-control" onChange={(event) => this.onChangeEvent(event, 'Lastname')} />
                        </div>
                        <div className="form-group">
                            <label>EMail:</label>
                            <input name="emailId" value={this.state.emailId} className="form-control" onChange={(event) => this.onChangeEvent(event, 'Email')} />
                        </div>
                    </form>
                    <button className="btn btn-success" onClick={(event) => this.saveEvent(event)} >Save</button>
                    <button className="btn btn-primary" style={{marginLeft: '10px'}} onClick={this.cancelEvent}>Cancel</button>
                </div>
            </div>
        )
    }

}

export default CreateEmployee;