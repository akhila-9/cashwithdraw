import React from 'react'
import "./cashwithdraw.css"
const CashWithdraw = ({amount,setamount}) => {
  return (
    <div className='maincard'>
      <div className='header'>
        <div className='profile'>A</div>
        <div className='para'>Akhila Gunaganti</div>
      </div>
      <div className='card1'>
        <div className="balance">Your Balance</div>
        
        <div className='card3'>
        <div className='price'>{amount}</div>
        <div className='rrrr'>IN RUPEES</div>
        </div>
      </div>
      <div className='card2'>
        <div className='price'>withdraw</div>
        <div className='balance'> CHOOSE SUM(IN RUPEES)</div>
      </div>
    </div>
  )
}

export default CashWithdraw
