import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PivotTableDemo from './components/PivotTable'
import PivotTable from './components/PivotTable'
import TablaPivot from './components/TablaPivotB'
import ReadExcel from './components/ReadExcel'
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
      
    //   <TablaPivot />
    //   <ReadExcel />
      
    // </div>
  )
}

export default App
