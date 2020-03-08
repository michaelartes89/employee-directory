import React from "react";
import "./style.css";

function Title(props) {
  return <div><h1 className="title">{props.children}</h1>
   <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Find Employee by ID:</label>
          <input
          value={props.search}
          onChange={props.handleInputChange}
            name="id"
            type="text"
            className="form-control"
            placeholder="Type in an employee ID"
            id="searchInput"
          />
          
          <button type="submit"className="btn btn-success" onClick={() => props.searchEmployee()}> 
            Search
          </button>
          <button type="submit" className="btn btn-primary" onClick={() =>props.resetEmployee()}>Reset</button>
        </div>
      </form>
  </div>
  ;
}

export default Title;
