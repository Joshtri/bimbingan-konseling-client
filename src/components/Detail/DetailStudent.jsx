import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const DetailStudent = () => {
    const { id_student } = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getStudentById();
    }, [id_student]);

    const getStudentById = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/student/${id_student}`);
            setStudent(response.data);
        } catch (error) {
            console.error("Failed to fetch student details:", error);
            navigate("/students");
        }
    };

    return (
        <div className="container">
            <h1 className="title">Detail Pelajar</h1>
            <h2 className="subtitle">Informasi Pelajar</h2>

            <Link to='/students' className="button is-small is-warning mb-3">Kembali</Link>

            {student ? (
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <table className="table is-fullwidth">
                                <tbody>
                                    <tr>
                                        <th>Nama Pelajar:</th>
                                        <td>{student.name}</td>
                                    </tr>
                                    <tr>
                                        <th>NIS:</th>
                                        <td>{student.nis}</td>
                                    </tr>
                                    <tr>
                                        <th>Tempat Kelahiran:</th>
                                        <td>{student.birthplace}</td>
                                    </tr>
                                    <tr>
                                        <th>Tanggal Lahir:</th>
                                        <td>{student.date_birth}</td>
                                    </tr>
                                    <tr>
                                        <th>Jenis Kelamin:</th>
                                        <td>{student.gender === "male" ? "Laki-laki" : "Perempuan"}</td>
                                    </tr>
                                    <tr>
                                        <th>Agama:</th>
                                        <td>{student.religion}</td>
                                    </tr>
                                    <tr>
                                        <th>Alamat:</th>
                                        <td>{student.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Nomor Telepon:</th>
                                        <td>{student.number_phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Kelas:</th>
                                        <td>{student.classId}</td>
                                    </tr>
                                    <tr>
                                        <th>User ID:</th>
                                        <td>{student.userId}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailStudent;
