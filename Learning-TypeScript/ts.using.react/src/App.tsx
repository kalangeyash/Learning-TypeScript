
import './App.css'

interface TodoInterface{
  title : string,
  description : string
}
function Todo(props:TodoInterface)
{
    return(<>
      <h1>
        {props.title}
      </h1>
      <h2>
        {props.description}
      </h2>
  
    </>)
}
function App() {


  return (
    <>
      
    </>
  )
}

export default App
