
import { useState } from "react"
import './App.css'

function App() {
  const [display, setDisplay] = useState('')
  
  const evalFunc = () => {
    try {
      setDisplay(eval(display))
    }
    catch {
      setDisplay('Error')
    }
  }

  const displayName = (event) => {
    const clickedValue = event.target.value
    setDisplay(prevValue => prevValue + clickedValue)
  }
  
  const sin = () => setDisplay(Math.sin(display))
  const cos = () => setDisplay(Math.cos(display))
  const tan = () => setDisplay(Math.tan(display))
  const pow = () => setDisplay(Math.pow(display, 2))
  const sqrt = () => setDisplay(Math.sqrt(display))
  const log = () => setDisplay(Math.log(display))
  const PI = () => setDisplay(Math.PI)
  const ABS = () => setDisplay(Math.abs)

  return (

    <>
      <h1>Calculator</h1>
      <div className="container">
        <div className="calculator">
          <form >
            <input type="text" className="display" value={display}></input>
            <div className="row">
              <input type='button' value={"sin"} className="operation" onClick={sin}></input>
              <input type='button' value={"cos"} className="operation" onClick={cos}></input>
              <input type='button' value={"tan"} className="operation" onClick={tan}></input>
              <input type='button' value={"PI"} className="operation" onClick={PI}></input>
            </div>
            <div className="row">
              <input type='button' value={"sqrt"} className="operation" onClick={sqrt}></input>
              <input type='button' value={"log"} className="operation" onClick={log}></input>
              <input type='button' value={"pow"} className="operation" onClick={pow}></input>
              <input type='button' value={"abs"} className="operation" onClick={ABS}></input>


            </div>

            <div className="row">
              <input type='button' value={"AC"} className="operation " onClick={() => setDisplay('')}></input>
              <input type='button' value={"DE"} className="operation " onClick={() => setDisplay(display.slice(0, -1))}></input>
              <input type='button' value={"."} className="operation darkMode" onClick={event => displayName(event)}></input>
              <input type='button' value={"/"} className="operation" onClick={event => displayName(event)}></input>
            </div>
            <div className="row">
              <input type='button' value={7} onClick={event => displayName(event)}></input>
              <input type='button' value={8} onClick={event => displayName(event)}></input>
              <input type='button' value={9} onClick={event => displayName(event)}></input>
              <input type='button' value={"*"} className="operation" onClick={event => displayName(event)}></input>
            </div>
            <div className="row">
              <input type='button' value={4} onClick={event => displayName(event)}></input>
              <input type='button' value={5} onClick={event => displayName(event)}></input>
              <input type='button' value={6} onClick={event => displayName(event)}></input>
              <input type='button' value={"+"} className="operation" onClick={event => displayName(event)}></input>

            </div>
            <div className="row">
              <input type='button' value={1} onClick={event => displayName(event)}></input>
              <input type='button' value={2} onClick={event => displayName(event)}></input>
              <input type='button' value={3} onClick={event => displayName(event)}></input>
              <input type='button' value={"-"} className="operation" onClick={event => displayName(event)}></input>

            </div>
            <div className="row">
              <input type='button' value={"00"} onClick={event => displayName(event)}></input>
              <input type='button' value={0} onClick={event => displayName(event)}></input>
              <input type='button' value={"="} className="operation flex-2" onClick={evalFunc}></input>

            </div>


          </form>


        </div>

        <div className="calculator dark">
          <form >
            <input type="text" className="display" value={display}></input>
                 <div className="row">
              <input type='button' value={"sin"} className="operation" onClick={sin}></input>
              <input type='button' value={"cos"} className="operation" onClick={cos}></input>
              <input type='button' value={"tan"} className="operation" onClick={tan}></input>
              <input type='button' value={"PI"} className="operation" onClick={PI}></input>
            </div>
            <div className="row">
              <input type='button' value={"sqrt"} className="operation" onClick={sqrt}></input>
              <input type='button' value={"log"} className="operation" onClick={log}></input>
              <input type='button' value={"pow"} className="operation" onClick={pow}></input>
              <input type='button' value={"abs"} className="operation" onClick={ABS}></input>

</div>

            <div className="row">
              <input type='button' value={"AC"} className="operation darkMode" onClick={() => setDisplay('')}></input>
              <input type='button' value={"DE"} className="operation darkMode" onClick={() => setDisplay(display.slice(0, -1))}></input>
              <input type='button' value={"."} className="operation darkMode" onClick={event => displayName(event)}></input>

              <input type='button' value={"/"} className="operation darkMode" onClick={event => displayName(event)}></input>
              </div>
            <div className="row">

              <input type='button' value={7} onClick={event => displayName(event)}></input>
              <input type='button' value={8} onClick={event => displayName(event)}></input>
              <input type='button' value={9} onClick={event => displayName(event)}></input>
              <input type='button' value={"*"} className="operation darkMode" onClick={event => displayName(event)}></input>

            </div>
            <div className="row">
              <input type='button' value={4} onClick={event => displayName(event)}></input>
              <input type='button' value={5} onClick={event => displayName(event)}></input>
              <input type='button' value={6} onClick={event => displayName(event)}></input>
              <input type='button' value={"+"} className="operation darkMode" onClick={event => displayName(event)}></input>

            </div>
            <div className="row">
              <input type='button' value={1} onClick={event => displayName(event)}></input>
              <input type='button' value={2} onClick={event => displayName(event)}></input>
              <input type='button' value={3} onClick={event => displayName(event)}></input>
              <input type='button' value={"-"} className="operation darkMode" onClick={event => displayName(event)}></input>


            </div>
            <div className="row">
              <input type='button' value={"00"} onClick={event => displayName(event)}></input>
              <input type='button' value={0} onClick={event => displayName(event)}></input>
              <input type='button' value={"="} className="operation flex-2 darkMode" onClick={() => setDisplay(eval(display))}></input>
            </div>


          </form>


        </div>
      </div>
    </>
  )
}

export default App
