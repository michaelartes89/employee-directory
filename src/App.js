import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";




class App extends Component {
  // Setting this.state.employee to the employee json array
  
  state = {
    employees:employees,
    search:""
  };
  removeEmployee = id => {
    // Filter this.state.employee for employee with an id not equal to the id being removed    
    let employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employee equal to the new friends array
    this.setState({ employees });
  };
  handleInputChange = val => {
    this.setState({ search: val });
  };
  

  searchEmployee = () => {
    if (this.state.search !== ""  ) {
      let employees = this.state.employees.filter((employee)=>{
        return employee.id == this.state.search

      }
    )
      return employees
    }
    else {
      return this.state.employees
    }
    
  //   let search =this.state.search
  
  //   this.setState( {employees});
  //   console.log(this.state.search)
  }

  resetEmployee = () => {
    this.setState ({ employees});
    console.log(this.state.employees)
  }
  render() {
    console.log(this.searchEmployee())
    return (
      <Wrapper>
        <Title 
        handleInputChange={this.handleInputChange}
        resetEmployee={this.resetEmployee}>
          Employee List
          
        </Title>
      
     
        {this.searchEmployee().map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;