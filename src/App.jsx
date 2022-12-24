import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer'
//link bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <NavBar />
    <ItemListContainer saludo={'Visitenos pronto'} />

    </>
  )
    
  
}

export default App
