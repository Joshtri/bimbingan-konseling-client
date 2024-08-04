import React, {useEffect} from 'react'
import Layout from '../Layout'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";
import CounsellingList from '../../components/List/CounsellingList.jsx';

const Counselling = () => {
  return (
    <Layout>
      <CounsellingList/>
    </Layout>
  )
}

export default Counselling