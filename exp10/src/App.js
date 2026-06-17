import React, { useState } from "react";
import "./App.css";

function App() {

  const [student, setStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const [message, setMessage] = useState("");

  // Welcome Message
  const showWelcome = () => {
    setMessage("Welcome to Student Management REST API");
  };

  // GET Student Details
  const getStudentDetails = () => {
    setStudent({
      id: 101,
      name: "Rishabh",
      course: "B.Tech CSE"
    });

    setMessage("Student Details Loaded Successfully");
  };

  // POST Student Data
  const addStudent = () => {

    if (
      student.id === "" ||
      student.name === "" ||
      student.course === ""
    ) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage(`Student Added Successfully : ${student.name}`);
  };

  return (
    <div className="container">

      <h1 className="title">
        Student Management REST API
      </h1>

      <div className="button-group">

        <button onClick={showWelcome}>
          Welcome Message
        </button>

        <button onClick={getStudentDetails}>
          Get Student Details
        </button>

      </div>

      <h2 className="message">{message}</h2>

      <div className="form-container">

        <input
          type="number"
          placeholder="Enter Student ID"
          value={student.id}
          onChange={(e) =>
            setStudent({
              ...student,
              id: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Enter Student Name"
          value={student.name}
          onChange={(e) =>
            setStudent({
              ...student,
              name: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={student.course}
          onChange={(e) =>
            setStudent({
              ...student,
              course: e.target.value
            })
          }
        />

        <button className="add-btn" onClick={addStudent}>
          Add Student
        </button>

      </div>

      <div className="card">

        <h2>Student Details</h2>

        <p>
          <strong>ID:</strong> {student.id}
        </p>

        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

      </div>
      <p>Name: <strong>RISHABH PAL</strong></p>
          <p>Roll No: <strong>2503201000920</strong></p>
    </div>
  );
}

export default App;