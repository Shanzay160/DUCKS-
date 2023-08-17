import { useState } from 'react';
import './App.css';
import Nav2 from './Components/Nav2';
import Nav from './Components/Nav';
import Navbar from './Components/Navbar';
import Duckdata from './Components/Duckdata';
import Pooldata from './Components/Pooldata'; // Import Pooldata component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav2/> */}
      {/* <Nav/> */}

      <Navbar />
      <Duckdata />
      <Pooldata />
    </>
  );
}

export default App;
