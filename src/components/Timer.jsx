import { useState, useEffect } from 'react'

function Timer() {

  const [timerValue, setTimeValue] = useState(0)
  const [minutes, setMinutes] = useState(0)

  // cuando el Timer exista, empiece a contar y sumar el valor
  // vamos a iniciar el setInterval usando el metodo de ciclo de vida ComponentDidMount


  useEffect(() => {
    console.log("el componente ha sido montado correctamente")
    // componentDidMount. esto solo se va a ejecutar una vez, al inicio del ciclo del componente
    const intervalId = setInterval(() => {
      console.log("ha pasado 1 segundo")
      // actualizaremos el estado
      // console.log("estado actual", timerValue) // 0
      // setTimeValue(timerValue + 1)
      setTimeValue((elValorActualDelEstado) => {
        // el parametro del callback SIEMPRE será el valor actual del estado
        // retornar cual será el nuevo valor
        return elValorActualDelEstado + 1
      })
    }, 1000)

    return () => {
      // componentWillUnmount
      console.log("Esto solo se ejecuta cuando el componente deje de existir")
      // detener el setInterval
      clearInterval(intervalId)
    }


  }, [])

  // ejemplo de componentWillUnmount fuera del componentDidMount
  useEffect(() => {
     return () => {
      console.log("componentWillUnmount fuera del inicial")
     } 
  }, [])

  // useEffect(() => {
  //   console.log("cuando ocurre esto?, siempre que haya un cambio en el componente")
  // }) // cuando hagan componentDidMount. NUNCA OLVIDEN EL ARRAY VACIO

  useEffect(() => {
    // componentDidUpdate => timerValue
    console.log("cambios en timerValue", timerValue)
    if (timerValue === 60) {
      setTimeValue(0)
      setMinutes(minutes + 1)
    }
  }, [timerValue])
  // escucha cuando hayan cambios en timerValue solamente, y ejecuta la funcion

  // const setTimeValue = (callback) => {
  //   //alguna ejecucion necesaria
  //   callback(timerValue)
  // }

  // // ejemplo de horas
  // useEffect(() => {
  //   // componentDidUpdate => timerValue
  //   console.log("cambios en timerValue", timerValue)
  //   if (minutes === 60) {
  //     setMinutes(0)
  //     setHoras(horas + 1)
  //   }
  // }, [minutes])


  return (
    <div>
      
      <h4>Tiempo andando</h4>
      <h2>{timerValue} segundos</h2>
      <h2>{minutes} minutos</h2>

    </div>
  )
}

export default Timer