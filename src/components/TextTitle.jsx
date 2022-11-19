import React from 'react'

const TextTitle = ({quoteRandomQuote,quoteRandomAuthor}) => {
  return (
    <div>
         <p className='card__quote'>{quoteRandomQuote}</p>
        <h1 className='card__author'>{quoteRandomAuthor}</h1>
    </div>
  )
}

export default TextTitle