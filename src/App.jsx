import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CashWithdraw from './CashWithdraw/cashwithdraw'
import DenominationItem from './DenominationItem/denomiation'
const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]
function App() {
 
  const [amount, setamount] = useState(2000)

  return (
    <div className='container'>

       <CashWithdraw amount={amount} setamount={setamount}/>
       <div className='amountcard'>
       { denominationsList.map((each)=>(
          
        <DenominationItem amountMap={each} amount={amount} setamount={setamount} />
       ))}
       </div>
      
       
      
    </div>
   
  
  )
}

export default App
