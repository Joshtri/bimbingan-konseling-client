import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FormAddClass = ()=> {
  return (
    <div>
      <h1 className="title">Kelas</h1>
      <h2 className="subtitle">Tambah Kelas Baru</h2>
      <Link to='/classes' className="button is-small is-warning mb-3">Kembali</Link>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>

              <div className="field">
                <label className="label">Nama Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    // value={}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="contoh: kelas XI IPA 1"
                  />
                </div>
              </div>
              <button className="button mt-3 is-success is-light">Tambahkan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddClass