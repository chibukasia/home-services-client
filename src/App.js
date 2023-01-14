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

function App() {
  console.log(version)
  const [user, setUser] = useState(null);

  // Fetch a logged user
  // useEffect(()=>{
  //   fetch('http://localhost:3000/logged_user')
  //   .then(res=>{
  //     if (res.ok){
  //       res.json().then(user=>setUser(user))
  //     }
  //   }) 
  // },[])

  useEffect(() => {
    fetch("http://localhost:3000/logged_user").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }else{
        response.json().then(err=>console.log(err))
      }
    });
  }, []);
  
  return (
    <div className="App">
      <ResponsiveAppBar user={user}/>
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
