import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3000/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get('http://localhost:3000/api/v1/employees');
    }

    getEmployeeById(employeeId){
        return axios.get('http://localhost:3000/api/v1/employees' + '/' + employeeId);
    }

}

export default new EmployeeService();