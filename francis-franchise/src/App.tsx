
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './login/login'
import SignUp from './signup/signup'

function App() {
 

  return (
    <>
     <Router>
      <Routes>
         <Route path="/" element={<Navigate to ="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </Router>
     
     
    </>
  );
}

export default App
