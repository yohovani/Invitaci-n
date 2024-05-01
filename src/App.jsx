import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/globos.png'
import princesa from './assets/princesa.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={globos} className='globos img-fluid'/>
      <Container className='margen'>
        <img src={princesa} className='princesa'/>
    </Container>
    </>
  )
}

export default App
