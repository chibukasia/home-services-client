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
import AddTerm from './components/terms_and_conditions/AddTerm';
import AppointmentForm from './components/appointments/AppointmentForm';
import Appointments from './components/appointments/Appointments';

function App() {
  const {user, setUser} = useContext(AppContext)
  const {services, setServices, setUserServices, setTerms, setAppointmentOrders} = useContext(AppContext)
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

  useEffect(()=>{
    fetch('http://localhost:3000/appointment_orders', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res=>{
      if (res.ok){
        res.json().then(data=>setAppointmentOrders(data))
      }else{
        res.json().then(error=>console.log(error))
      }
    })
    .catch(error=>console.log(error))
  },[])


  return (
    <div className="App">
      <ResponsiveAppBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp onSignUp={setUser}/>}/>
        <Route path='/login' element={<SignIn onLogin={setUser}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/new-service' element={<ServiceForm/>}/>
        <Route path='/add-user-service' element={<UserService services={services}/>}/>
        <Route path='/update-profile' element={<UpdateProfile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/new-condition' element={<AddTerm/>}/>
        <Route path='/user-service/:id/new-appointment' element={<AppointmentForm/>}/>
        <Route path='appointments' element={<Appointments/>}/>
      </Routes>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
