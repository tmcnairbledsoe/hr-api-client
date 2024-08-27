import React from 'react';
import EmployeeList from './components/EmployeeList';
import SearchEmployees from './components/SearchEmployees';

function App() {
    return (
        <div className="App">
            <h1>HR API Client</h1>
            <EmployeeList />
            <SearchEmployees />
        </div>
    );
}

export default App;
