import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const ClassList = () => {
  return (
    <div>
        <h1 className="title">Kelas</h1>
        <h2 className="subtitle">Daftar Kelas</h2>

        <Link to="/classes/add" className="button is-primary mb-2">
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

export default ClassList