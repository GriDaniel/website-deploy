import { useState } from 'react'
import Sidenav from './assets/components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Sidenav/>
  )
}

export default App
