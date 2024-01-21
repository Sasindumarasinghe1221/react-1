

function App() {

  function hello(e){
    console.log("sasi 1" , e.target);
  }
  //arraw function 
  const hello2 = (e) => {
    console.log("marasinghe", e);

  }
//using paramites
function hello3(name,e){
  console.log("hello 3" + name,e);
}

const hello4 = (name,e) => {
  console.log("hello 4" + name,e);
}
  return (
    <>
    <div id="wrapper">
      <button onClick={hello}>click 1</button>
      <br />
      <button onClick={hello2}>click 2</button>
      <br />
      
      <button onClick={(e) => {hello3( "sachindra",e)}}>click 3</button> <br />
      <button onClick={(e) => {hello4( "mala",e.target)}}>click 4</button>


    
    </div>
      
    </>
    
  )
}

export default App
