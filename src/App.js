import "./App.css";
import CreateUser from "./components/create-user.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListUser from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import ConvertToCsv from "./components/export-csv.component";
function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Media Mint React Application</h2>
        <div>
        <Routes>
            <Route path="/" element={<ListUser />}></Route>
          </Routes>
          <Routes>
            <Route path="/create" element={<CreateUser />}></Route>
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
          <Route path="/list" element={<ListUser />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/edit" element={<EditUser />}></Route>
          </Routes>
          <Routes>
          <Route path="/csv" element={<ConvertToCsv />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
