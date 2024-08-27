import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/apiService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEmployees();
            setEmployees(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>All Employees</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.employeeId}>
                        {employee.firstName} {employee.lastName} - {employee.job.jobTitle} - {employee.department.departmentName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
