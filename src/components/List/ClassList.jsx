import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const ClassList = () => {
  return (
    <div>
        <h1 className="title">Kelas</h1>
        <h2 className="subtitle">Daftar Kelas</h2>

        <Link to="/class/add" className="button is-primary mb-2">
            Add New
        </Link>
    </div>
  )
}

export default ClassList