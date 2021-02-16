import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3000/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get('http://localhost:3000/api/v1/employees');
    }

    getEmployeeById(employeeId){
        return axios.get('http://localhost:3000/api/v1/employees' + '/' + employeeId);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    editEmployee(employeeId, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService();