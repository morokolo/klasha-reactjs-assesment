import React from 'react'

export const CurrencyConvertor = ({amount, currency}) => {
  return (
    
    <div>
         { currency === 'USD' && (
             <span>	&#36; {amount.toFixed(2)}</span> 
          )}
          { currency === 'NN' && (
             <span>&#8358; {(amount /7.432).toFixed(2)}</span> 
          )}
    </div>
  )
}
