import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import VideoEditorPortfolio from './assets/components/Videoeditorportfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoEditorPortfolio />
    </>
  )
}

export default App
