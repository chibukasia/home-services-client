import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/Login';
import { useEffect} from 'react';
import ResponsiveAppBar from './components/NavBar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/services/Services';
import ServiceForm from './components/services/ServiceForm';
import Footer from './components/Footer';
import UserService from './components/services/UserService';
import { AppContext } from './context';
import { useContext } from 'react';
import UpdateProfile from './components/profiles/UpdateProfile';
import Profile from './components/profiles/Profile';

function App() {
  const {user, setUser} = useContext(AppContext)
  const {services, setServices, setUserServices, setTerms} = useContext(AppContext)
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
  
  useEffect(()=>{
    fetch("http://localhost:3000/user_services")
    .then(res=>{
      if(res.ok){
        res.json().then(data=>setUserServices(data))
      }else{
        res.json().then(err=>console.log(err))
      }
    })
  },[]) 

  useEffect(()=>{
    fetch("http://localhost:3000/terms_and_conditions")
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setTerms(data))
      }else{
        res.json().then(err=>console.log(err))
      }
    })
    .catch(err=>{
      console.log(`The following error has occured: ${err}`)
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
        <Route exact path='/add-user-service' element={<UserService services={services}/>}/>
        <Route exact path='/update-profile' element={<UpdateProfile/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
