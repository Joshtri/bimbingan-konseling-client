import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClassList = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        getClass();
    },[]);

  const getClass = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/class`)
    setClasses(response.data);
  };

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
            <th>Class Name</th>
            <th></th>
          </tr>
        </thead>
            <tbody>

           
        {classes.map((classItem, index) => (
            <tr key={classItem.id_class}>
              <td>{index + 1}</td>
              <td>{classItem.class_name}</td>
              <td className="">
                <Link to='/classes/edit' className="button is-small">Edit</Link>
              </td>
            </tr>
          ))}
           </tbody>
      </table>
    </div>
  );
};

export default ClassList;
