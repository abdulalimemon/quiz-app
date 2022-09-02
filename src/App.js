import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import ResetPassword from './components/Login/ResetPassword';
import Nav from './components/Nav/Nav';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/quiz' element={<Quiz></Quiz>}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
