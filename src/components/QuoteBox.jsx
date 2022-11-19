import React from 'react'
import BtnQuote from './BtnQuote'
import TextTitle from './TextTitle'

const QuoteBox = ({quoteRandom, handLeClick,colorRandom}) => {
const objStyle ={color: colorRandom}
const objStyleBtn={backgroundColor:colorRandom}
  return (
    <article className='card' style={objStyle}>
        <i className="card__icon fa-solid fa-quote-left"></i>
        <TextTitle quoteRandomQuote={quoteRandom.quote}  quoteRandomAuthor={quoteRandom.author}/>
        <BtnQuote objStyleBtn={objStyleBtn} handLeClick={handLeClick}/>
    </article>
  )
}

export default QuoteBox