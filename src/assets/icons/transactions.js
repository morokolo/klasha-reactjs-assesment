
import React from 'react'

export default function TransactionIcon({
    size = 18, 
    color = "black" 
}) {
    return (
<svg   width={size}
        height={size} 
        fill={color}
       viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M7.46875 19.1563L7.46875 4.53125M7.46875 4.53125L4.46875 7.53125M7.46875 4.53125L10.4687 7.53125" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1562 4.53125V19.1562M17.1562 19.1562L14.1562 16.1562M17.1562 19.1562L20.1562 16.1562" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}