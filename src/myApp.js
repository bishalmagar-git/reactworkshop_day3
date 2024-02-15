import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [name,setName] = useState("Bishal Magar")  //setName helps to change the name.
  return (
   <>
     <button onClick={()=> setName("Bishwa Raj")}>
     {name}
     </button> 

   </>
  );
}

export default App;
