import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users/Users";
import AddUser from "./pages/Users/AddUser";
import EditUser from "./pages/Users/EditUser";
import Classes from "./pages/Classes/Classes";
import AddClasses from "./pages/Classes/AddClasses";
import Students from "./pages/Students/Students";
import AddStudents from "./pages/Students/AddStudents";
import DetailStudent from "./pages/Students/DetailStudent";
import Counselling from "./pages/Counselling/Counselling";
import AddCounselling from "./pages/Counselling/AddCounselling";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />


          {/* Classes */}
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes/add" element={<AddClasses/>}/>
          {/* <Route path="/classes/add/:id"/> */}

          {/* Students */}
          <Route path="/students" element={<Students/>}/>
          <Route path="/students/add" element={<AddStudents/>}/>
          <Route path="/students/detail/:id_student" element={<DetailStudent/>}/>

          {/* Counselling */}
          <Route path="/counselling" element={<Counselling/>}/>
          <Route path="/counselling/add" element={<AddCounselling/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
