import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';


function App() {
  return (
    <BrowserRouter >
    <div>
      <Navbar />
    </div>
    <Routes>
     <Route path="/" element={<Home />}  />
     <Route path="/signup" element={<SignUp/>}  />
     <Route path="/signin" element={<SignIn/>}  />
     <Route path="/profile" element={<Profile/>}  />
     <Route path="/createPost" element={<Createpost/>}  />
    </Routes>
    <ToastContainer theme = "dark" />
    </BrowserRouter>
  );
}

export default App;
