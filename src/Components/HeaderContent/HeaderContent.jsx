import React from 'react'
import './HeaderContent.css'
import Links from '../Links/Links'
import logo from '../../assets/react.svg'

function HeaderContent() {
  return (
    <div id="header">
       <div>
        <img src={logo}  />  <Links/>
       </div>
     
        
  </div>
  )
}

export default HeaderContent