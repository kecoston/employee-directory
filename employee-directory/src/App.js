import Title from './components/Title/Title';
import Employee from './components/Employee/Employee';
import Search from './components/Search/Search'
import employees from "./employee-list.json"

function App() {
  return (
    <div className="container">
    <Title/>
    <Search/>
    <Employee
    image={employees[0].image}
    firstName={employees[0].firstName}
    lastName={employees[0].lastName}
    role={employees[0].role}
    department={employees[0].department}
    />
    </div>
  )
}

export default App;
