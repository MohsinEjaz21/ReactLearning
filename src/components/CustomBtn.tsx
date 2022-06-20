import "@styles/CustomBtn.css"
import React from 'react'
export const CustomBtn = ({ label, handleClick }) => {
  return (
    <button className="cta" onClick={handleClick} >
      <span>{label}</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </button>
  )
}
