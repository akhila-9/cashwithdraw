import React from 'react'
import "./denomination.css"


const DenominationItem = ({amountMap,amount,setamount}) => {
    let amountselectedbyuser=amountMap.value
   
  
    const clickingFunction= () => {
        if (amount>0){
        let  filtered= ( amount-amountselectedbyuser)
     setamount(filtered)
        }
        else if (amount <=0){
           setamount(0)
        }
    }

  return (
    <div>
      <button className='btnStyle' onClick={clickingFunction} >{amountMap.value}</button>
    </div>
  )
}

export default DenominationItem
