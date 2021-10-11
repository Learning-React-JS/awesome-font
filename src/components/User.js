import React, { Component } from 'react'

export default class User extends Component {
   
    render() {
        const {name, department, salary} = this.props;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="fas fa-user-tie" style={{cursor: "pointer"}}></i>
                    </div>

                    <div className="card-body">
                        <p className="card-text">Department: {department}</p>
                        <p className="card-text">Salary: {salary}</p>
                    </div>
                </div>

            </div>
        )
    }
}
