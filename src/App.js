import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employees => employees.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employees => (
          <EmployeeCard
            removeEmployee={this.remove}
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.image}
            occupation={employees.occupation}
            location={employees.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
