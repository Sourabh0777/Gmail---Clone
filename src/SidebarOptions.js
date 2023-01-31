import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions({Icon, text, number}) {
  return (
    <div className='sidebarOption'>
        <Icon/> 
        <h3>{text}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions;