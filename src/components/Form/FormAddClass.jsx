import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FormAddClass = ()=> {
  const [class_name, setClassName] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  
  
  const saveClass = async(e)=>{
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/class`,{
        class_name:class_name
      });
      Navigate("/classes");

    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  
  return (
    <div>
      <h1 className="title">Kelas</h1>
      <h2 className="subtitle">Tambah Kelas Baru</h2>
      <Link to='/classes' className="button is-small is-warning mb-3">Kembali</Link>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <p className="has-text-centered">{msg}</p>
            <form onSubmit={saveClass}>
              <div className="field">
                <label className="label">Nama Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={class_name}
                    onChange={(e) => setClassName(e.target.value)}
                    placeholder="contoh: kelas XI IPA 1"
                  />
                </div>
              </div>
                <button type="submit" className="button mt-3 is-success is-light">Tambahkan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddClass