import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Courses from './components/Pages/Courses/Courses';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Shared/Navbar';
import Teachers from './components/Pages/Teachers/Teachers';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
      </Routes>
    </div>
  );
}

export default App;