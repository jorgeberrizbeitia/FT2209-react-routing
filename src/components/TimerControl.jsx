import React, { useState } from 'react'
import Timer from './Timer'

function TimerControl() {

  const [ mostrarTimer, setMostrarTimer ] = useState(false)

  const handleClick = () => setMostrarTimer(!mostrarTimer)

  return (
    <div>
      
      <button onClick={handleClick}>Iniciar Timer</button>


      { mostrarTimer === true ? <Timer /> : null}

    </div>
  )
}

export default TimerControl