import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=1000");
  },
  // Gets the employee with the given id
  getEmployee: function (id) {
    return id;
  }
}
