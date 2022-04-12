import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignUp from './Pages/Home/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
