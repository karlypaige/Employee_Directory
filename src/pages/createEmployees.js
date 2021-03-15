import React from "react";


// export default {
//   searchTerms: function() {
//     return axios.get(
//       "https://randomuser.me/api/"
//     );
//   }
// };

function createEmployees() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function (data) {
        console.log(data.results[0]);
  
        let record = data.results[0];
        let name = record.name;
  
        employeeList.push(
          {
            title: '${name.title}',
            firstName: '${name.first}',
            lastName: '${name.last}',
            gender: '${record.gender}',
            picture: '${record.picture.large}',
            date: new Date(Date.now())
          }
        )

      }
    });
  };

export default createEmployees;