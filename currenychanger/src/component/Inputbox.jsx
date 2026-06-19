function Inputbox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectCurrency="usd",
    onCurrencyChange,
    amountDisable=false,
    currencyDisable=false

}){
    return(
        <>
        <div className="w-[450px] bg-slate-400 flex h-24 ml-6 mt-2 rounded-xl">
            <div className="w-1/2  m-1 flex flex-col">
                <label className="pl-3 pt-1">{label}</label>
                <input
                        type="number"
                        placeholder="Enter amount"
                        className="border rounded p-1 w-[190px] m-3"
                        value={amount}
                        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                        disabled={amountDisable}
                />
            </div>
            <div className="w-1/2  m-1 flex flex-col items-end ">
                <label className=" pt-1 pr-3">{label}</label>
                <select className="w-[120px] h-[30px] mt-3 mr-2 text-right"
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        </>
    )
}

export default Inputbox