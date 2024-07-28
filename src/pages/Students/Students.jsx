import React, { useEffect } from "react";
import Layout from "../Layout";
import ClassList from "../../components/List/ClassList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";


const Students = () => {

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
        <div>Students</div>
    )
}

export default Students