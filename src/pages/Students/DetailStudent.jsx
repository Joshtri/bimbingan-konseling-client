import React, { useEffect, useState } from 'react'
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";
import DetailStudent from '../../components/Detail/DetailStudent.jsx';

const AddStudents = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/");
      }
    }, [isError, navigate]);

    return (
    <Layout>
        <DetailStudent/>
    </Layout>
  )
}

export default AddStudents