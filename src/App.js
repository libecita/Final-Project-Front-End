import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";


function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
