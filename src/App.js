
import './App.css';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import {Signup} from './component/user/Signup'
import {Login}  from './component/user/Login';
function App() {
  return (
    <>
      <Router>
    <div >
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
        </Router>
      
      
    </>
  );
}

export default App;
