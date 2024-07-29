import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
  return (
    <div>
        <h1 className="title">Pelajar</h1>
        <h2 className="subtitle">Daftar Pelajar</h2>

        <Link to="/students/add" className="button is-primary mb-2">
            Add New
        </Link>

        <table className="table is-striped is-fullwidth">
            <thead>
            <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>

            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default StudentList