import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "../Modal/ConfirmModal"; // Import komponen modal


const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [classToDelete, setClassToDelete] = useState(null);

    useEffect(()=>{
        getClass();
    },[]);

  const getClass = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/class`)
    setClasses(response.data);
  };

    const handleDeleteClick = (classItem) => {
        setClassToDelete(classItem);
        setIsModalOpen(true);
    };

    const confirmDelete = async () => {
        if (classToDelete) {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/class/${classToDelete.id_class}`);
            setClasses(classes.filter(classItem => classItem.id_class !== classToDelete.id_class));
            closeModal();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setClassToDelete(null);
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
                      <button onClick={() => handleDeleteClick(classItem)} className="button is-small is-light is-danger mx-2">Delete</button>
                      <Link to={`/classes/edit/${classItem.id_class}`} className="button is-small is-info is-light">Edit</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={isModalOpen}
        titleModal={`Konfirmasi Hapus`}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete the class ${classToDelete?.class_name}?`}
      />
    </div>
  );
};

export default ClassList;
