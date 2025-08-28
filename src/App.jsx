//importaciones de metodos, estilos o funcionalidades a usar
import { useEffect, useState } from 'react'
import './App.css'
import ButtonCustom from './assets/ButtonCustom'

//El nombre del componente, los componentes si o si deben empezar con mayuscula
function App() {

  //Las variables del componente, Hooks 
  // const  count            = 0
  //useState es un Hook que permite crear una variable de estado, escucha cambios en el estado y vuelve a renderizar el componente.
  const [count, setCount] = useState(0)
  const [titulo, setTitulo] = useState('CALCULADORA')
  const [colorTitle, setColorTitle] = useState('magenta')

  //useEffect es un Hook que permite ejecutar efectos secundarios, se compone de dos partes: la función que se ejecuta y el array de dependencias.
  //useEffect(funcion flecha ()=>{}, [dependencias])
  //Si el array de dependencias está vacío, se ejecuta una sola vez al construir, dibujar o renderizar el componente.
  //Si el array de dependencias tiene variables, se ejecuta cada vez que alguna de esas variables cambie.
  //Si no tiene array de dependencias, se ejecuta en cada renderizado del componente.



  useEffect(() => {
    console.log(count)
    setColorTitle('green')
  }, [])

  useEffect(() => {
    if (count >= 10) {
      //  setColorTitle('violet')
      console.log('El contador 2 ha alcanzado o superado 10')
    }
  }, [count])
  //useCallback <- Memoizar funciones
  //useRef <- Referencias a elementos del DOM
  //setCount((count) => count + 1)
  return (
    <>
      <h1 style={{ color: `${colorTitle}` }}> {titulo} </h1>
      <div className="card">
        <ButtonCustom titlePepito={'SUMA'} funcionManuelita={() => setCount((count) => count + 1)} />
        <ButtonCustom titlePepito={'RESTA'} funcionManuelita={() => setCount((count) => count - 1)} />
        <h2> Resultado {count} </h2>
      </div>
    </>
  )
}
//Permite importar el componente
export default App
