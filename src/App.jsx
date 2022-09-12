import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PivotTableDemo from './components/PivotTable'
import PivotTable from './components/PivotTable'
import TablaPivot from './components/TablaPivotB'
import ReadExcel from './components/ReadExcel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <TablaPivot />
      <ReadExcel />
      
    </div>
  )
}

export default App
