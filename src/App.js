import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/Login';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser]=useState(null)

  // Fetch a logged user
  useEffect(()=>{
    fetch('http://localhost:3000/logged_user')
    .then(res=>res.json())
    .then(user=>setUser(user))
  },[])
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home user={user}/>}/>
        <Route exact path='/signup' element={<SignUp onSignUp={setUser}/>}/>
        <Route exact path='/login' element={<SignIn onLogin={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
