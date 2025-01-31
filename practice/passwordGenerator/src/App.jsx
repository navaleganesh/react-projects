import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hook/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd") //  from
  const [to, setTo] = useState("inr") // to
  const [convertedAmount, setConvertedAmount] = useState(0) // Convert USD to INR for button

  //How to use hook
  const currencyInfo = useCurrencyInfo(from) // from matalab jo hook banaya hai waha pai currency yaha se pass hogi
  console.log("Currency Information:", currencyInfo);

  
  const options = Object.keys(currencyInfo) // Yaha pai json database mai jo only keys hai unko sabko access kiya
  console.log("Options", options);
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) //  Jo bhi list diya usase multiplication karna hai "setConvertedAmount" ye wo state hai jo final result degi 
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      // style={{
      //   backgroundImage: `url('${BackgroundImage}')`,
      // }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                  amount={amount}
                  currencyOptions = {options} 
                  onCurrencyChange={(currency)=>setAmount(amount)} // InputBox component pai jo change ho jay wo yaha aa jaye.
                  selectCurrency = {from}
                  onAmountChange ={(amount)=> setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button" onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions = {options} 
                onCurrencyChange={(currency)=>setTo(currency)} // InputBox component pai jo change ho jay wo yaha aa jaye.
                selectCurrency = {to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App




