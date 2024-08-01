import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentList = () => { 
    const [students, setStudents] = useState([]);


    useEffect(()=>{
        getStudents();
    });

    const getStudents = async()=>{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/student`) 
        setStudents(response.data);
    }

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
            <th>Nama Pelajar</th>
            <th>NIS</th>
            <th>Kelas</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
            {students.map((studentItem, index)=>(

            <tr key={studentItem.id_student}>
                <td>{index + 1}</td>
                <td>{studentItem.name}</td>
                <td>{studentItem.nis}</td>
                <td>{studentItem.classId}</td>
                <td className="">
                    <button className="button is-small is-link is-light mx-2">Detail</button>
                    <button className="button is-small is-info is-light">Edit</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
