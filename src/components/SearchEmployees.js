import React, { useState } from 'react';
import { searchEmployees } from '../services/apiService';

const SearchEmployees = () => {
    const [searchParams, setSearchParams] = useState({});
    const [employees, setEmployees] = useState([]);

    const handleSearch = async () => {
        const result = await searchEmployees(searchParams);
        setEmployees(result);
    };

    const handleChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2>Search Employees</h2>
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="departmentName"
                    placeholder="Department Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="countryName"
                    placeholder="Country Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="regionName"
                    placeholder="Region Name"
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
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

export default SearchEmployees;
