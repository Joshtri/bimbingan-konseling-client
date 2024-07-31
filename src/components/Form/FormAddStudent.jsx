import React from 'react'
import { Link } from 'react-router-dom'


const FormAddStudent = () => {
  return (
    <div>
        <h1 className='title'>Pelajar</h1>
        <h2 className='subtitle'>Tambah Pelajar Baru</h2>

        <Link to='/classes' className='button is-small is-warning mb-3'>Kembali</Link>

        
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form>
                        <div className="field">
                            <label className="label">Nama Pelajar</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    // value={  }
                                    // onChange={(e) => setName(e.target.value)}
                                    placeholder="contoh: kelas XI IPA 1"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">NIS (Nomor Induk Siswa)</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    // value={  }
                                    // onChange={(e) => setName(e.target.value)}
                                    placeholder="contoh: kelas XI IPA 1"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Tempat Kelahiran</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    // value={  }
                                    // onChange={(e) => setName(e.target.value)}
                                    placeholder="contoh: kelas XI IPA 1"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Tanggal Lahir</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    // value={  }
                                    // onChange={(e) => setName(e.target.value)}
                                    placeholder="contoh: kelas XI IPA 1"
                                />
                            </div>
                        </div>
                    </form>
                    <button className="button mt-3 is-success is-light">Tambahkan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddStudent