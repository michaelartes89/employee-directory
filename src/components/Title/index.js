import React, { useRef } from "react";
import "./style.css";

function Title(props) {
  let val = useRef();
  return <div><h1 className="title">{props.children}</h1>
   <div className="search">
        <div className="form-group">
          <label htmlFor="employee">Find Employee by ID:</label>
          <input
           //value={props.search}
           //onChange={props.handleInputChange}
            ref={val}
            name="id"
            type="text"
            className="form-control"
            placeholder="Type in an employee ID"
            id="searchInput"
          />
          
          <button className="btn btn-success" onClick={() => {props.handleInputChange(val.current.value)}}> 
            Search
          </button>
          <button className="btn btn-primary" onClick={() =>props.resetEmployee()}>Reset</button>
        </div>
      </div>
  </div>
  ;
}

export default Title;
