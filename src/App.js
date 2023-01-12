import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/login' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
