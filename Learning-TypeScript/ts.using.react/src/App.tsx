
import './App.css'

interface TodoInterface{
  title : string,
  description : string,
  time : number
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
      <h3>
        {props.time}
      </h3>
  
    </>)
}
function App() {


  return (
    <>
      <Todo title='Go to gym..' description='hellon to gym' time={7007}></Todo>
    </>
  )
}

export default App
