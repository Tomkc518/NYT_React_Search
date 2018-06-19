import React from "react";

const Saved = props =>
  <div className="container">
    <li className="list-group-item mb-2">
      <div className="flex-container">
        <span className="pull-left">
          <a href={props.url} target="_blank">
          <h4><em>{props.title}</em></h4>
          </a>
        </span>
        <span className="btn-group">
          <button className="btn btn-dark" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
        </span>
      </div>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default Saved;
