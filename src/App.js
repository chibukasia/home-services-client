import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/Login';
import { useEffect, useState, version } from 'react';
import ResponsiveAppBar from './components/NavBar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import ServiceForm from './components/ServiceForm';

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token')
  useEffect(() => {
    fetch("http://localhost:3000/logged_user",{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
    <div className="App">
      <ResponsiveAppBar user={user}/>
      <ServiceForm/>
      <Routes>
        <Route exact path='/' element={<Home user={user}/>}/>
        <Route exact path='/signup' element={<SignUp onSignUp={setUser}/>}/>
        <Route exact path='/login' element={<SignIn onLogin={setUser}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<ContactUs/>}/>
        <Route exact path='/services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
