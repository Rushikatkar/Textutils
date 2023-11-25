
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';


function App(props) {

   const toggleMode= ()=>{
      if(mode==='light'){
         setmode('dark')
         document.body.style.backgroundColor = 'black'
      }else{
         setmode('light')
         document.body.style.backgroundColor = 'white'

      }
   }

   const [mode, setmode] = useState('light');
  return (
    <>
    
   <Navbar title="Textutils" About="About" mode={mode} toggleMode={toggleMode}/>

   
   <BrowserRouter>
      <Routes>
         <Route  path='/' element={<Textform heading="Enter your Text here" mode={mode}/>}/>
         <Route  path='/About' element={<About/>}/>
      </Routes>
    </BrowserRouter>,
    
    
   {/* <Navbar /> */}
   {/* <div className="container my-3"> */}
      {/* <Textform heading="Enter your Text here" mode={mode}/> */}
   {/* </div> */}
   {/* <div className="container my-3">
      <h1 className='my-3'>About Us</h1>
      <About/>
   </div> */}
   
   </>
  );
}

export default App;
