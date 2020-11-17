
import React, { Component } from "react";
import Title from './components/Title/Title';
import Employee from './components/Employee/Employee';
import Search from './components/Search/Search'
import employees from "./employee-list.json"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="container">

        <Title />
        <Search />

        {this.state.employees.map(employees => (
          <Employee
            image={employees.image}
            firstName={employees.firstName}
            lastName={employees.lastName}
            role={employees.role}
            department={employees.department}
          />

        ))}

      </div>
    )
  }
}
export default App;
