import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizForm from './components/QuizForm';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Home from './components/Home';
import DestinationList from './components/DestinationList'
import Results from './components/Results';
import Profile from './components/Profile';
import Account from './components/Account';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<QuizForm />} />
        <Route path='/destinationList' element={<DestinationList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/results' element={<Results />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
