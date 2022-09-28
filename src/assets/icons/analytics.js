



import React from 'react'

export default function AnalyticsIcon({
    size = 18, 
    color = "none" 
}) {
    return (


<svg
width={size}
height={size}
fill={color}
 viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_816_6935)">
<rect x="2.25" y="12.75" width="4.5" height="7.5" stroke={color} fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="9.75" y="9" width="4.5" height="11.25" stroke={color} fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="17.25" y="3.75" width="4.5" height="16.5" stroke={color} fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_816_6935">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}