import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const DetailStudent = () => {
    const getStudentById = async()=>{
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`)
        } catch (error) {
            
        }
    };

    return (
        <div>DetailStudent</div>
    )
}

export default DetailStudent