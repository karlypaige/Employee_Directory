import React, { useEffect, useState } from "react";
import "./employee.css"
import { Input, TextArea, FormBtn } from "../components/Search";

function Employees() {

  const [employees, setEmployees] = useState([]);
  const [formObject, setFormObject] = useState({})

  let number = 5;

  useEffect(() => {
    // const fetchBusinesses = () => {
    fetch("https://randomuser.me/api/?results=" + number)
      .then(response => response.json())
      .then(data => {
        setEmployees(data.results);
      });

  }, []);

  let tableData = employees.map((employee, index) => {
    return (<tr key={index}>
      <td>{employee.name.title}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.gender}</td>
      <td><img src={employee.picture.medium} alt="employee avatar" /></td>
    </tr>);
  });
  console.log("table data " + tableData);


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject) {
      // Url = "https://randomuser.me/api/?results=" + formObject.name.title;
      // useEffect();
      console.log("you have submitted an employee");
      console.log(formObject);
    };
  }


  return (
    <div>
      <form>
        <Input
          onChange={handleInputChange}
          name="firstName"
          placeholder="First name"
        />
        <Input
          onChange={handleInputChange}
          name="lastName"
          placeholder="Last name"
        />
        <FormBtn
          disabled={!(formObject)}
          onClick={handleFormSubmit}
        >
          Submit Employee
        </FormBtn>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Profile picture</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};


export default Employees;