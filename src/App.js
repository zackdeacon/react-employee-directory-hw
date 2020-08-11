import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { generateUsers } from "./utils/API";
import Table from "./components/Table"
import FilterInput from "./components/FilterInput"
import "./App.css";

function App() {

  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    generateUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="container">
      <div className="row box">
        <div className="col-12">
       <h1 className="header-one"> PureCloud Employee Directory</h1>
       </div>
       <div className="col-12">
       <p className="initial-p">Welcome to the employee directory search page! Please enter the name of an employee that you would like to find!! You can sort first and last name columns by clicking the column headers.</p>
       </div>
       </div>
       <FilterInput users={initialUsers} updateUsers={updateUsersToRender} className="filtered-input" />
       <Table users={usersToRender} className="table" />
    </div>
  );
}

export default App;
