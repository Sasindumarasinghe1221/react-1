import React from 'react'
import '../App.css';
import HeaderContent from '../Components/HeaderContent/HeaderContent';
import BodyContent from '../Components/BodyContent/BodyContent';

function ContcatUs() {
  return (
    <>
    <div id="wrapper">
      <HeaderContent/>
      <BodyContent>
        <h3>Contcat us page</h3>
        <p>Explain why someone should contact your business.
             Describe how your business can help solve the 
             visitors' problems. Include an email and phone 
             number so visitors can get in touch with you on
              their first attempt. Include a short form using
               fields that'll help your 
            business understand who's contacting them.</p>
      </BodyContent>
  
   
      </div>
        
      </>
      
  )
}

export default ContcatUs