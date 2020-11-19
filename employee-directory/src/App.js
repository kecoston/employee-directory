
import React, { Component } from "react";
import Title from './components/Title/Title';
import Employee from './components/Employee/Employee';
import Search from './components/Search/Search'
import employees from "./employee-list.json"

class App extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      employees,
      searchValue:"",
      searchInput:""
    };
  
  }
  
  searchInput = (search) => {
    this.setState({searchValue: search})
  }

  handleInputChange = (event) => {

    const value = event.target.value

    this.setState ({
      searchInput: value
    })
  }



  render() {

    console.log(this.state.searchValue)


    return (
      <div className="container">

        <Title />
        <Search  
        search={this.searchInput}
        />

        {this.state.employees.filter( (employee) => {
          if (!this.state.searchValue) {
            return true
          }
          if (this.state.searchValue === employee.firstName) {
            return true
          }
          return false
        
        }).map(employees => (
          
          <Employee
            id={employees.id}
            key={employees.key}
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
