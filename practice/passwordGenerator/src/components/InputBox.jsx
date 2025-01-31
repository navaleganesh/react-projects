import React, {useId} from 'react'


function InputBox({
    label, // From and To sathi
    amount, // Input text value mention amount
    onAmountChange, // Jo bhi is component ko call karega vaha par use hoga(amount change hoga to state bhi change hogi na)
    onCurrencyChange, // currency filter change
    currencyOptions = [], //Koi na koi array mai hi muze pass karo, in case nahi karo to default empty array lelu. Empty array jo hai(Currency Type filter) ye sab array se hi go through karenge. Aaynge kaha se humare pass to json data hai waha se. 
    selectCurrency = "usd", // List to hai currency ki. Lekin pata hai select konsi karni hai wo bhi. By default jo bhi man ho wo dedo like "usd"  
    amountDisable = false, // Koi user amount nahi dena chahate, ya dena chate hai to uske liye. But iski jarurat nahi hai. aap le sakte ho. 
    currencyDisable = false, // Iska bhi aap disable & enable le sakte hai. Ye Production grade app mai ye sab lagta hai. Chahe to ingnore kar sakte ho.
    className = "", // class change kar ne ke liye  
}) {
    console.log("On currency change",onCurrencyChange);
    
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
