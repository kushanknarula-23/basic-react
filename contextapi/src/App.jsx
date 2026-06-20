import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContext.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {


  return (
    <>
      <h1>React with chai and kushank</h1>
      {/* as i have defined the whole layout in the userContext provider now i will load it in the app.jsx and put the children in it*/}
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

    </>

  )
}

export default App
