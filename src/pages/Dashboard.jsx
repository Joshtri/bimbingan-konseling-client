import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import axios from "axios";

// CSS untuk flexbox
const styles = {
  flexContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap", // Membuat elemen tetap rapih pada layar kecil
    padding: "20px",
  },
  flexItem: {
    margin: "10px",
    flexBasis: "30%", // Ukuran dasar untuk setiap elemen, bisa diubah sesuai kebutuhan
    minWidth: "200px", // Lebar minimum untuk elemen, bisa diubah sesuai kebutuhan
  },
};

// Komponen CardComp
const CardComp = ({ cardTitle, totalValue }) => (
  <div className="card" style={styles.flexItem}>
    <div className="card-content">
      <p className="title">{cardTitle}</p>
      <p className="subtitle">{totalValue}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalStudent, setTotalStudent] = useState("");
  const [totalClass, setTotalClass] = useState("");
  const [totalUser, setTotalUser ] = useState("");

  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    fetchTotalStudent();
    fetchTotalClass();
    fetchTotalUser();
  }, []);

  const fetchTotalStudent = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/total_student`);
      setTotalStudent(response.data);
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  }

  const fetchTotalClass = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/total_class`);
      setTotalClass(response.data);
    } catch (error) {
      console.log(`Error fetching total class:`, error);
    }
  }

  const fetchTotalUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/total_user`);
      setTotalUser(response.data);
    } catch (error) {
      console.log(`Error fetching total user:`, error);
    }
  }

  return (
    <Layout>
      <Welcome />
      <div style={styles.flexContainer}>
        <CardComp
          cardTitle={'Kelas'}
          totalValue={totalClass}
        />
        <CardComp
          cardTitle={'Pelajar'}
          totalValue={totalStudent}
        />
        <CardComp
          cardTitle={'User'}
          totalValue={totalUser}
        />
        
        <CardComp
          cardTitle={'Konseling'}
          totalValue={'33'}
        />

        <CardComp
          cardTitle={'Laporan'}
          totalValue={'44'}
        />



      </div>
    </Layout>
  );
};

export default Dashboard;
