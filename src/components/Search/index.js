import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Find Employee by ID:</label>
          <input
            value=""
            name="id"
            list="ids"
            type="text"
            className="form-control"
            placeholder="Type in an employee ID"
            id="breed"
          />
          
          <button type="submit"className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
  
  