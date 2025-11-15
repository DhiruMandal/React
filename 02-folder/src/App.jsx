import './App.css'
import card from './components/card.jsx'
import nevbar from './components/nevbar.jsx'

const App = () => {
  return (
    <div>
      
      {nevbar()}
      {card()}
    </div>
  )
}

export default App
