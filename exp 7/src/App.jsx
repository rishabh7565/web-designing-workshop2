import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <StudentCard
        name="Rahul Sharma"
        course="Computer Science"
        marks="85"
      />

      <StudentCard
        name="Anita Verma"
        course="Information Technology"
        marks="92"
      />

      <StudentCard
        name="Rohan Gupta"
        course="Electronics"
        marks="78"
      />
    </div>
    
  );
}

export default App;