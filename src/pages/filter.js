import React, { useEffect, useState } from "react";
import "./employee.css"
import { Input, FormBtn } from "../components/Search";
// , TextArea
import "bootstrap";

function Employees() {

  const [employees, setEmployees] = useState([]);
  const [formObject, setFormObject] = useState({})
  let tableData;

  // let number = 10;

  useEffect(() => {
    // const fetchBusinesses = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        setEmployees(data.results);
      });

  }, []);


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject) {
      if (formObject.firstName && !formObject.lastName) {
        tableData = employees.map((employee, index) => {

          if (employee.name.first === formObject.firstName) {
            console.log("Names match!" + employee.name.first);
            return (<tr key={index}>
                <td>{employee.name.title}</td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.gender}</td>
                <td><img src={employee.picture.medium} alt="employee avatar" /></td>
              </tr>);
            
          }

        })



      } else if (!formObject.firstName && formObject.lastName) {
        console.log("Last name only")
      }
      else if (formObject.firstName && formObject.lastName) {
        console.log("Both names")
      } else {
        //display 
        tableData = employees.map((employee, index) => {
          return (<tr key={index}>
            <td>{employee.name.title}</td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.gender}</td>
            <td><img src={employee.picture.medium} alt="employee avatar" /></td>
          </tr>);
        });
      };

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