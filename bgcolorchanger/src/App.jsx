import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    // <>
    //   <div className='w-full h-screen duration-200'
    //   style={{backgroundColor:color}}>
    //     <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 p-5 bg-blue'>
    //       <div className='flex flex-wrap justify-center bg-white px-7 py-1 rounded-3xl gap-4'>
    //         <button onClick={()=>{setColor("red")}}className='px-4 rounded-4xl text-white'
    //         style={{backgroundColor:"red"}}>red</button>
    //         <button onClick={()=>{setColor("blue")
    //         }}className='px-4 rounded-4xl text-white'
    //         style={{backgroundColor:"blue"}}>blue</button>
    //         <button onClick={()=>{setColor("green")}} className='px-4 rounded-4xl text-white'
    //         style={{backgroundColor:"green"}}>green</button>
    //       </div>
    //     </div>
    //   </div>


    // </>
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-5 bottom-12'>
        <div className='flex flex-wrap justify-center rounded-3xl bg-white px-5 py-2 gap-3'>
          <button onClick={()=>setColor("red")} className='rounded-2xl px-4 text-white 'style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("blue")} className='rounded-2xl px-4 text-white' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("green")}className='rounded-2xl px-4 text-white' style={{backgroundColor:"green"}}>green</button>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default App
