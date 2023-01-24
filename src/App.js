import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/Login';
import { useEffect, useState} from 'react';
import ResponsiveAppBar from './components/NavBar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/services/Services';
import ServiceForm from './components/services/ServiceForm';
import Footer from './components/Footer';
import { AppContext } from './context';
import { useContext } from 'react';

function App() {
  const {user, setUser} = useContext(AppContext)
  const {services, setServices, useServices, setUserServices} = useContext(AppContext)
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

  useEffect(()=>{
    fetch("http://localhost:3000/services", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setServices(data))
      }else{
        res.json().then(error=>console.log(error))
      }
    })
  },[])
  
  return (
    <div className="App">
      <ResponsiveAppBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<SignUp onSignUp={setUser}/>}/>
        <Route exact path='/login' element={<SignIn onLogin={setUser}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<ContactUs/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/new-service' element={<ServiceForm/>}/>
      </Routes>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
