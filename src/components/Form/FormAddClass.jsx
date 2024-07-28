import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddClass = ()=> {
  return (
    <div>
      <h1 className="title">Kelas</h1>
      <h2 className="subtitle">Tambah Kelas Baru</h2>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddClass