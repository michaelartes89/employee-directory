import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };
  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed    
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            firstname={employee.firstname}
            lastname={employee.lastname}
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