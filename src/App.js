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
    <div className="App">
       <h1 className="header-one"> Employee Directory</h1>
       <p className="initial-p">Welcome to the employee directory search page! Please enter the name of an employee that you would like to find!!</p>
       <p className="second-p">Search:</p>
       <FilterInput users={initialUsers} updateUsers={updateUsersToRender} className="filtered-input" />
       <Table users={usersToRender} className="table" />
    </div>
  );
}

export default App;
