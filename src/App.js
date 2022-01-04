import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Farms from './pages/Farms'
import Header from './components/Header'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { mainFunctions } from "./providers/MainProvider";


function App() {
  const {
    isAuthenticated
  } = useContext(mainFunctions);
  return (
      <div className="App">
        <Header />
        <Routes>
          {/* My Routes comes here */}
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={isAuthenticated ? <Dashboard /> : <Login/>}/>
          <Route exact path="/register" element={isAuthenticated ? <Dashboard /> : <Register/>}/>
          <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />}/>
          <Route exact path="/farms" element={isAuthenticated ? <Farms /> : <Login />}/>
        </Routes>
        

        {/* Provider */}

        <Footer />
      </div>
      
  );
}

export default App;
