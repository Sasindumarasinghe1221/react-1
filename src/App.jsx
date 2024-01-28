

import './App.css';

function App() {

  function sum (...somenumbers){
    let total = 0;
    somenumbers.forEach(somenumber => {
      total = total + somenumber;
    });
    return total;

  }
  console.log(sum(1,2,3,4,5,6,7,8))
  
  function mybio(name,channel,...rest){
    console.log(name,channel,rest)

  }
  mybio("sasindu","facebook","a","b")
return (
  <>
  
  </>
)

}

export default App
