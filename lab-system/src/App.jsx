import { useState } from 'react'
import './App.css'
import { Determinaciones } from './components/Determinaciones'
import { Muestras } from './components/Muestras'

function App() {

  const [mainmenu,setMainmenu] = useState(1)

  return (
    <>
    <button onClick={()=>setMainmenu(1)}>Muestras</button>
    <button onClick={()=>setMainmenu(2)}>Determinaciones</button>
    {
      mainmenu == 1 ?
      <Muestras/> :
      <Determinaciones/>
    }
    </>
  )
}

export default App
