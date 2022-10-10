import { Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/Main'
import Project1 from './components/Project1/Project1';
import Project2 from './components/Project2/Project2';
import Project3 from './components/Project3/Project3';
import Project4 from './components/Project4/Project4';
function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/project-1' element={<Project1 />} />
        <Route path='/project-2' element={<Project2 />} />
        <Route path='/project-3' element={<Project3 />} />
        <Route path='/project-4' element={<Project4 />} />
      </Routes>
    </>
  );
}

export default App;
