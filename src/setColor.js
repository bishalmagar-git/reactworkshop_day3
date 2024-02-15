import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [name, setName] = useState("Samrat Magar")
    const [color, setColor] = useState("Blue")
  return (
   <>
     <button
        style = {{
            background: color
        }}
        onClick={()=>{
            setName("Bishal Magar");
            setColor("Red")
        }}>
            {name}
     </button>
   </>
  );
}

export default App;
