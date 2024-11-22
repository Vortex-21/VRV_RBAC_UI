import React from 'react'
import { ContentScreen } from './components/ContentScreen'
import { NavBar } from './components/NavBar'
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar/>
      <ContentScreen/>

    </div>
  )
}




export default App