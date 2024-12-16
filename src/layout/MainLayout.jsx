import React from 'react'
import SmallNavBar from "../Components/SmallNavBar.jsx";
import Panel from '../Components/Panel.jsx'
import GlassType from '../Components/GlassType.jsx'

const MainLayout = ({children}) => {
  return (
    <div>
      <SmallNavBar/>
        <Panel/>
        <GlassType/>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout
