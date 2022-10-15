import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import MainRoutes from './Allroutes/MainRoutes';
// import Login from './Components/Login';
import { useSelector } from 'react-redux';
// import Resturant from './Components/Restaurent';


function App() {
  let token = useSelector((state) => state.login);
  return (
    <div className="App">
     <Navbar/> 
     <MainRoutes/> 


    

    </div>
  );
}

export default App;



