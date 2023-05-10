import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

 import Home from './components/Home';
 import About from './components/About'


function App() {
  return (
    <BrowserRouter>
    <Link to="/About">About</Link>
    <br/>
    <Link to="/">Home</Link>
    
      <Routes>              
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>                
      </Routes>     
    </BrowserRouter>      
   );
  }
  
  //Create the components that need to be rendered at different url
 // We created the home and about components
 // configure the routes using the routes and route components from react router

export default App;

