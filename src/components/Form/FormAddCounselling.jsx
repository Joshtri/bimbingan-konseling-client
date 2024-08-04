import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const FormAddCounselling = () => {
    const [students, setStudents] = useState([]);
    const [classes, setClasses] = useState([]);

    // Initialize state variables.
    const [classId, setClassId] = useState("");
    const [studentId, setStudentId] = useState("");
    const [userId, setUserID] = useState("")
    const [solution, setSolution] = useState("");
    const [student_problem, setStudentProblem] = useState("");
    const [penalty, setPenalty] = useState("");
    const [counselling_date, setCounsellingDate] = useState("");
    const [counselling_note, setCounsellingNote] = useState("");

    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        getStudents();
        getClasses();
        if (user) {
            setUserID(user.id_user);
        }
    }, [user]);

    const getStudents = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/student`);
            setStudents(response.data);
        } catch (error) {
            console.error("Failed to fetch students:", error);
        }
    };

    const getClasses = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/class`);
            setClasses(response.data);
        } catch (error) {
            console.error("Failed to fetch classes:", error);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log({
                studentId,
                classId,
                student_problem,
                penalty,
                solution,
                counselling_date,
                counselling_note,
                userId
            });
    
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/counselling`, {
                studentId,
                classId,
                student_problem,
                penalty,
                solution,
                counselling_date,
                counselling_note,
                userId // Ensure userId is correct
            });
    
            console.log('Submission response:', response);
    
            navigate('/counselling');
        } catch (error) {
            console.error("Failed to submit counselling data:", {
                message: error.message,
                response: error.response ? {
                    status: error.response.status,
                    data: error.response.data,
                } : null,
                stack: error.stack,
            });
        }
    };
    

    return (
        <div>
            <h1 className='title'>Konseling</h1>
            <h2 className='subtitle'>Tambah Konseling Baru</h2>

            <Link to='/counselling' className='button is-small is-warning mb-3'>Kembali</Link>

            <div className='card is-shadowless'>
                <div className='card-content'>
                    <div className='content'>
                        <form onSubmit={handleSubmit}>

                        <input type="text" value={userId} onChange={(e) => setUserID(e.target.value)} />

                            <div className='field'>
                                <label className="label">Nama Pelajar</label>
                                <div className="control">
                                    <select 
                                    className='input' 
                                    value={studentId}
                                    onChange={(e)=> setStudentId(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        {students.map(student => (
                                            <option key={student.id_student} value={student.id_student}>
                                                {student.name} - {student.id_student}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Kelas Pelajar</label>
                                <div className="control">
                                    <select className='input' value={classId}
                                    onChange={(e)=> setClassId(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        {classes.map(classItem => (
                                            <option key={classItem.id_class} value={classItem.id_class}>
                                                {classItem.class_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Permasalahan</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={student_problem}
                                        onChange={(e) => setStudentProblem(e.target.value)}
                                        placeholder="Permasalahan"
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Sanksi/Penalty</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={penalty}
                                        onChange={(e) => setPenalty(e.target.value)}
                                        placeholder="Sanksi/Penalty"
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Solusi permasalahan</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={solution}
                                        onChange={(e) => setSolution(e.target.value)}
                                        placeholder="Solusi permasalahan"
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Catatan</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={counselling_note}
                                        onChange={(e) => setCounsellingNote(e.target.value)}
                                        placeholder="opsional"
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Tanggal Konsultasi</label>
                                <div className="control">
                                    <input
                                        type="date"
                                        className="input"
                                        value={counselling_date}
                                        onChange={(e) => setCounsellingDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type='submit' className='button is-success is-light'>Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAddCounselling;
