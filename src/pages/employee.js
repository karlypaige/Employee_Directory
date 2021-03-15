import React, { useEffect, useState } from "react";
import "./employee.css"
import { Input, FormBtn } from "../components/Search";
import "bootstrap";
import API from "../utils/API";

function Employees() {

  const [employees, setEmployees] = useState([])
  const [formObject, setFormObject] = useState({})
  let tableData;
  let emplArray = [];

  useEffect(() => {
    loadEmployees()
  }, []);

  function loadEmployees() {
    console.log(API.getEmployees())
    API.getEmployees()
      .then(res =>
        setEmployees(res.data.results)
      )
      .catch(err => console.log(err));
  };


  // // Handles updating component state when the user types into the input field
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
            emplArray.push(API.getEmployee(employee))
          }

        })
      } else if (!formObject.firstName && formObject.lastName) {
        tableData = employees.map((employee, index) => {

          if (employee.name.last === formObject.lastName) {
            emplArray.push(API.getEmployee(employee))
          }

        })
      } else if (formObject.firstName && formObject.lastName) {
        tableData = employees.map((employee, index) => {

          if (employee.name.first === formObject.firstName && employee.name.last === formObject.lastName) {
            emplArray.push(API.getEmployee(employee))       
          }

        })
      } else {
        //display 
      };
      console.log(emplArray);
      setEmployees(emplArray);
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
  }

  tableData = employees.map((employee, index) => {
    return (<tr key={index}>
      <td>{employee.name.title}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.gender}</td>
      <td><img src={employee.picture.medium} alt="employee avatar" /></td>
    </tr>);
  });

  // render() {
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
  // }
}


export default Employees;