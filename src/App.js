import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {
  const [darkMode , setDarkMode] = useState(false)
  return (
    <div  className={darkMode ? 'dark' : "" }>
     <Navbar setDark={setDarkMode} dark={darkMode}/>
     <Main />
    </div>
  );
}

export default App;
