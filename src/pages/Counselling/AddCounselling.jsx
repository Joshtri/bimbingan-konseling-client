import React from 'react'
import Layout from '../Layout'

import { getMe } from '../../features/authSlice'
import FormAddCounselling from '../../components/Form/FormAddCounselling'
import axios from 'axios'


const AddCounselling = () => {
  return (
    <Layout>
        <FormAddCounselling/>
    </Layout>
  )
}

export default AddCounselling