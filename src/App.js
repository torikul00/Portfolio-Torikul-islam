
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ContactMe from './components/ContactMe/ContactMe'

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contactMe' element={<ContactMe/>} />

      </Routes>
    
    
    </>
  );
}

export default App;
