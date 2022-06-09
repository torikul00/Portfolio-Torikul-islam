
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/contactMe' element={<ContactMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    
    
    </>
  );
}

export default App;
