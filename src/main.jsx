
import { createRoot } from 'react-dom/client'
import './App.css'

import { useState } from 'react'
function Counter(){
  const [count, setCount] = useState(0);
  const Increase=()=>{
     setCount(count + 1);

  }
   const Decrease=()=>{
    
    if(count >0){
       setCount(count - 1); 
    }
    else{
      alert("Digit is less than 0")
    }
    
  }
  return(
    <div id='container'>
      <div>
      <h1>Counter App</h1>  
      </div>
      <div>
       <h1>{count}</h1> 
      </div>
      
       <button id='btn1' onClick={Increase}>Increment</button>
       <button id='btn2' onClick={Decrease}>Decrement</button>
    </div>
   
  )
  
}
createRoot(document.getElementById('root')).render(
 

<Counter/>
)
