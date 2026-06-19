import { useState , useCallback ,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length ,setlength]= useState(8)
  const [number ,setnumber]=useState(false)
  const [specialCharacter , setcharacter] = useState(false)
  const [Password,setPassword] = useState("")

  // when we click on the number and character or lenght then the password 
  // generator function is called so by this means we can say the number and
  // character and length have dependency on the setpassword function 
  // for this we will use the useCallbackhook 


  
// use callback is used in the optimization by memization the function in the memory so every time 
// new function does not run eveytime on calling the new function 


  const passwordGenerator = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789";
    if(specialCharacter) str+="@#$%^&*()!"

    for(let i = 0;i<length;i++){
      // noe we have to find the indexes 

      let char = Math.floor((Math.random() * str.length + 1))

      password += str.charAt(char)

      setPassword(password)
    }
  },[number,specialCharacter,length]) //use callback take two parameters one is function and another is dependencies in the form of array 
   
  const passwordRef = useRef(null)

  const copypassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
  useEffect(()=>{passwordGenerator()},[number,specialCharacter,length])

  return (
    <>
    <div className='w-full max-w-md mx-auto bg-slate-700 my-5 h-auto text-center rounded-3xl text-orange-400 '>
      <h1>Password Generator</h1>
      <div className='flex justify-center px-4 mt-3'>
        <input className="bg-slate-500 rounded w-full pl-5 text-white mb-3 text-xs" type="text" value={Password} placeholder='Password' readOnly ref={passwordRef}></input>
        <button onClick={()=>{
          copypassword()
        }}className='bg-blue-500 rounded mb-3 w-15'>Copy</button>
      </div>

      <div className='flex justify-center gap-5'>
        <div>
          <input type="range" min={6} max={50} value={length} className='cursor:pointer' onChange={(e)=>{setlength(e.target.value)}}></input>
          <label>Length:{length}</label>
        </div>

        <div>
          <input type="checkbox" Checked={number} onChange={()=>{
          setnumber((prev)=>!prev)
        }}></input>

        <label>Number</label>
        </div>

        <div>
          <input type="checkbox" Checked="specialCharacter" onChange={()=>{
            setcharacter((prev)=>!prev)
          }}></input>
          <label>Character</label>
        </div>


      </div>
    </div>
    </>
  )
}

export default App
