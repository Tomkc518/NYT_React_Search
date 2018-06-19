import React from "react";
import "./style.css"

const Results = props =>
  <div className="container">
    <li className="list-group-item mb-2">
      <div className="flex-container">
        <span>
          <a href={props.url} target="_blank">
           <h4><em>{props.title}</em></h4>
          </a>
        </span>
        <div className="justify-content-end">
          <button className="btn btn-dark " onClick={() => props.handleSaveButton(props._id)}>Save</button>
        </div>
      </div>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default Results;
