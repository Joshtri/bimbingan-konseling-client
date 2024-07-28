import React, { useEffect } from "react";
import Layout from "../Layout";
import FormAddClass from "../../components/Form/FormAddClass";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";

const AddClasses = () => {
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
            <FormAddClass/>
        </Layout>
    )
}

export default AddClasses