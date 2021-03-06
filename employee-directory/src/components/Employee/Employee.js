import React from "react";
import "./employee.css"

function Employee(props) {
    return (
        <div className="card mb-3" className="row">
           
            <div className="col-md-2">
            <img src={props.image} className="card-img" alt={props.name}></img>
            </div>

            <div className="col-md-9">
            <h2 className="card-title">Name: {props.firstName} {props.lastName}</h2>
            <p className="card-text"><strong> Role:</strong> <i>{props.role} </i>| <strong>Department:</strong> <i>{props.department}</i></p>
        
            </div>

        </div>
    )
}

export default Employee