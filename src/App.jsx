import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './assets/json/quotes.json'
import colors from './assets/json/colors.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const getRandomArray = array => {
    const indexRandom = Math.floor(array.length * Math.random())
    return array[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomArray(colors))

  const handLeClick = () =>{
    setQuoteRandom(getRandomArray(quotes))
    setColorRandom(getRandomArray(colors))
  }
  
  const objStyle = {
    backgroundColor: colorRandom
  }
 
  return (
    <div className="App" style={objStyle}>
      <QuoteBox quoteRandom={quoteRandom} handLeClick={handLeClick} colorRandom={colorRandom}/>
    </div>
  )
}

export default App
