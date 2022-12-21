import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import Contact from './components/Pages/Contact/Contact';
import Courses from './components/Pages/Courses/Courses';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Navbar from './components/Pages/Shared/Navbar';
import Teachers from './components/Pages/Teachers/Teachers';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;