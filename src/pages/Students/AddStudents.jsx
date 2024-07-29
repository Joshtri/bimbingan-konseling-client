import React, { useEffect, useState } from 'react'
import Layout from "../Layout";
import FormAddStudent from "../../components/Form/FormAddStudent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";

const AddStudents = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);
  
    // useEffect(() => {
    //   dispatch(getMe());
    // }, [dispatch]);
  
    // useEffect(() => {
    //   if (isError) {
    //     navigate("/");
    //   }
    // }, [isError, navigate]);

    return (
    <Layout>
        <FormAddStudent/>
    </Layout>
  )
}

export default AddStudents