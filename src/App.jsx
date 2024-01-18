

function App() {
  const firstname = "Jone";
  const middlename = "Alan";
  const surename = "Smith";
  const age = "30";
  const country = "Sri Lanka";
  const getFullName = (f,m,s) => {
    return  `${f} ${m} ${s}`;
  }
  const arr = ["apple","grapes","oranges"];
  const lang =      <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>React</li>
 </ul>;
 const pobj = {
  fname : "smith",
  age : "60"
 }
  return (
    <>
    <div className="cont">
       <h1>Employee details</h1>
       <p>Full name:{firstname} {middlename} {surename}</p>
       <p>Full name function:{getFullName("sasindu","sachindra","marasinghe")}</p>
       <p>{firstname} likes to eat {arr [0]}</p>
       <p>Age :{age}</p>
       <p>country : {country}</p>
       
       <p>Frontend languages</p>
   <p>{lang}</p>
   <p>{pobj.fname} is {pobj.age} years old</p>
    </div>
    </>
  )
}

export default App
