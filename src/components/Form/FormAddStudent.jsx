import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const FormAddStudent = () => {
    const [classes, setClasses] = useState([]);
    const [name, setStudentName] = useState("");
    const [nis, setNis] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [date_birth, setDateBirth] = useState("");
    const [gender, setGender] = useState("");
    const [religion, setReligion] = useState("");
    const [address, setAddress] = useState("");
    const [number_phone, setNumberPhone] = useState("");
    const [classId, setClassID] = useState("");
    const [userId, setUserID] = useState("");

    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        getClass();
        if (user) {
            setUserID(user.id_user);
        }
    }, [user]);

    const getClass = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/class`);
            setClasses(response.data);
        } catch (error) {
            console.error("Failed to fetch classes:", error);
        }
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        const studentData = {
            name,
            nis,
            birthplace,
            date_birth,
            gender,
            religion,
            address,
            number_phone,
            classId,
            userId
        };
        console.log("Sending student data:", studentData);
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/student`, studentData);
            console.log("Student saved successfully:", response.data);
            navigate("/students");
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.data);
            } else {
                console.error("Failed to save student:", error.message);
            }
        }
    };

    return (
        <div>
            <h1 className='title'>Pelajar</h1>
            <h2 className='subtitle'>Tambah Pelajar Baru</h2>

            <Link to='/students' className='button is-small is-warning mb-3'>Kembali</Link>

            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveStudent}>
                            <input type="text" value={userId} onChange={(e) => setUserID(e.target.value)} />

                            <div className="field">
                                <label className="label">Nama Pelajar</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        placeholder="contoh: John Doe"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Kelas Pelajar</label>
                                <div className="control">
                                    <select
                                        className="input"
                                        value={classId}
                                        onChange={(e) => setClassID(e.target.value)}
                                    >
                                        <option>-</option>
                                        {classes.map((classItem) => (
                                            <option key={classItem.id_class} value={classItem.id_class}>
                                                {classItem.id_class} - {classItem.class_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">NIS (Nomor Induk Siswa)</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={nis}
                                        onChange={(e) => setNis(e.target.value)}
                                        placeholder="contoh: 123456789"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Tempat Kelahiran</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={birthplace}
                                        onChange={(e) => setBirthplace(e.target.value)}
                                        placeholder="contoh: Kupang"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Tanggal Lahir</label>
                                <div className="control">
                                    <input
                                        type="date"
                                        className="input"
                                        value={date_birth}
                                        onChange={(e) => setDateBirth(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Jenis Kelamin</label>
                                <div className="control">
                                    <select
                                        className="input"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="male">Laki-laki</option>
                                        <option value="female">Perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Agama</label>
                                <div className="control">
                                    <select className="input" value={religion} onChange={(e)=> setReligion(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="kristen protestan">Kristen Protestan</option>
                                        <option value="katholik">Katholik</option>
                                        <option value="islam">Islam</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="buddha">Buddha</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Alamat</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="contoh: Jl. Merdeka"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Nomor Telepon</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={number_phone}
                                        onChange={(e) => setNumberPhone(e.target.value)}
                                        placeholder="contoh: 081234567890"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="button mt-3 is-success is-light">Tambahkan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddStudent;
