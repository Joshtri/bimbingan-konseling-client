import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BreadCrumbs from "../BreadCrumbs";
import ConfirmModal from "../Modal/ConfirmModal";

const CounsellingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counsellingToDelete, setCounsellingToDelete] = useState(null);
  const [counselling, setCounselling] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCounselling();
  }, []);

  const getCounselling = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/counselling`);
      setCounselling(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteClick = (counsellingItem) => {
    setCounsellingToDelete(counsellingItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCounsellingToDelete(null);
  };

  const confirmDelete = async () => {
    if (counsellingToDelete) {
      try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/counselling/${counsellingToDelete.id_counselling}`);
        setCounselling(counselling.filter(counsellingItem => counsellingItem.id_counselling !== counsellingToDelete.id_counselling));
        closeModal();
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const breadCrumbsItems = [
    { label: "Dashboard", href: "/dashboard", active: false },
    { label: "Data Konseling", href: "/counselling", active: true }
  ];

  return (
    <div>
      <h1 className="title">Konseling</h1>
      <h2 className="subtitle">Daftar Konseling</h2>

      <BreadCrumbs items={breadCrumbsItems} />

      {error && <p className="has-text-danger">{error}</p>}

      <Link to="/counselling/add" className="button is-primary mb-2">
        Add New
      </Link>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pelajar</th>
            <th>Kelas Pelajar</th>
            <th>Permasalahan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {counselling.map((counsellingItem, index) => (
            <tr key={counsellingItem.id_counselling}>
              <td>{index + 1}</td>
              <td>{counsellingItem.Student ? counsellingItem.Student.name : "N/A"}</td>
              <td>{counsellingItem.Class ? counsellingItem.Class.class_name : "N/A"}</td>
              <td>{counsellingItem.student_problem}</td>
              <td>
                <button onClick={() => handleDeleteClick(counsellingItem)} className="button is-small is-light is-danger mx-2">Delete</button>
                <Link to={`/counsellings/detail/${counsellingItem.id_counselling}`} className="button is-small is-link is-light mx-2">Detail</Link>
                <button className="button is-small is-info is-light">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <ConfirmModal
          titleModal="Konfirmasi Hapus"
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
          message={`Are you sure you want to delete the counselling ${counsellingToDelete?.id_counselling}?`}
        />
      )}
    </div>
  );
};

export default CounsellingList;
