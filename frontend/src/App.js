
import './App.css';
import Header  from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Editblog from './components/Editblog';
import Showpage from './components/Showpage';
import {BrowserRouter as Router, Route, Routes, Link, Switch} from 'react-router-dom';
import Createblog from './components/Createblog';

function App() {
  return (
    <>
        
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/createblog" element={<Createblog/>}/>
        <Route path="/edit/:id" element={<Editblog/>}/>
        <Route path="/showpage/:id" element={<Showpage/>}/>
        </Routes>
     
      </Router>
       
      
       
        
      <Footer/>
    </>
  );
}

export default App;
