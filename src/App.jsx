
import { useState } from 'react';
import './App.css';
function App() {
//let num1 = 2;
//value ekak dinamicaly venas krnva nm meka bavitha kranna mekata kynne reacthook kyla
const [num1,setnum1] = useState(2)
const [count,setcount] = useState(2)


function handleClick(){
  //num1 = 3;
  setnum1(3)
  //alert(num1)
}
  
const decrementFunction = () => {
    setcount(count - 1)
}
const incrementFunction = () => {
  setcount(count + 1)
}
    return (
  <>
  <div id="wrapper">
   <button onClick={handleClick}>Click</button>
<p>{num1}</p>

<p>Counter</p>
<button onClick={decrementFunction}>-</button> 
<button onClick={incrementFunction}>+</button>
<p>{count}</p>
    </div>
      
    </>
    
  )
}

export default App
