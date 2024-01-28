

import './App.css';
import Loggedin from './Components/Loggedin';
import LoggedOut from './Components/LoggedOut';
function App() {

  const loggedin = true;
  const names = ["jone","smith"];
  const namescount = names.length;
return (
  <>
  {loggedin && <Loggedin/>}
  {!loggedin && <LoggedOut/>}
  {namescount > 0 && names.map((name)=>{
    return <h2>{name}</h2>
  })}
  {namescount == 0 && <p>None provided</p> }
  
  {namescount > 0 ? (names.map((name)=>{
    return <h2>{name}</h2>
  })) : ( <p>None </p> )}

  </>
)

}

export default App
