import { useState } from 'react'
import Inputbox from './component/Inputbox'
import './App.css'
import useCurrencyinfo from './hook/customHook'

function App() {

  const [amount ,setAmount] = useState(0)
  const[from , setfrom] = useState("usd")
  const[to,setto]=useState("inr")
  const[convert , setconvert] = useState(0)
  
  const currencyinfo = useCurrencyinfo(from)

  const swap = ()=>{
    setto(from)
    setfrom(to)
    setAmount(convert)
    setconvert(amount)
  }

  const options = Object.keys(currencyinfo)

  const convertcurrency = ()=>{
    setconvert(amount*currencyinfo[to])
  }
  return (
    <>
    <div className='bg-slate-700 h-screen flex items-center justify-center'>
      <div className='block bg-white h-[350px] w-[500px] rounded-xl' >
        <form className="flex flex-col gap-3"onSubmit={(e)=>{
          e.preventDefault()
          convertcurrency()
        }}>
          <Inputbox 
            label="from"
            amount={amount}
            onAmountChange={(amount)=>{
              setAmount(amount)
            }}
            currencyOptions = {options}
            selectCurrency = {from}
            onCurrencyChange ={(currency)=>{setfrom(currency)
            }}
          />
          <button type='button' onClick={swap} className='bg-green-500 w-[200px] ml-35 rounded-xl h-[35px] mt-2'>Swap</button>
          <Inputbox 
            label="to"
            amount={convert}
            onAmountChange={(amount)=>{setAmount(amount)}}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency)=>{setto(currency)}}
          />
          <button type="button" onClick={convertcurrency} className='bg-blue-500 w-[200px] ml-35 rounded-xl h-[35px]'>Convert</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
