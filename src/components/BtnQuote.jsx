import React from 'react'

const BtnQuote = ({objStyleBtn,handLeClick}) => {


  return (
    <button style={objStyleBtn} className='card__btn' onClick={handLeClick}>&gt;</button>
  )
}

export default BtnQuote