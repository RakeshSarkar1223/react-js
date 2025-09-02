import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(()=>{
    const storedcount  = localStorage.getItem('count');
    return storedcount ? parseInt(storedcount) : 0;
  })

  useEffect(() => {
  localStorage.setItem('count', count.toString());
}, [count]);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if(count === 0){
      return
    }
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="counter-container">
  <div className="counter-card">
    <h1 className="counter-title">Counter: {count}</h1>

    <div className="button-group">
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
    </div>

    <button className="btn btn-reset" onClick={reset}>Reset</button>
  </div>
</div>

    </>
  )
}

export default App
