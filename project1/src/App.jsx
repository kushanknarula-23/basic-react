import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  // always declare the useState hook in the function not the outside means in the global scope 
  let [counter,setCounter] = useState(15)  // we have imported the hook from the react library 

  // basically what it does is when we update the counter we have to manually select
  // wit js that thing is removed in this we use the useState hook which return 
  // the return array with the value which is going to update and function which is going 
  // to update the value and by default it update the state of that of that value we dont have to do anything 
  // by our own hands everything is managed by react hooks
  const add = ()=>{
    if(counter >=20 ){
      return 
    }
    else{
      setCounter(counter+1)
      console.log("value entered " ,counter)
    }
  }

  const remove =()=>{
    if(counter <= 0){
      return
    }else{
    setCounter(counter-1)
    console.log("value decreased by" , counter)
  }
  }
  return (
    <div>
      <h1>hello how are you {counter} </h1>
      <button onClick={add}>add value {counter}</button>
      <br />
      <button onClick={remove}>remove value {counter}</button>
    </div>
  )
}

export default App
