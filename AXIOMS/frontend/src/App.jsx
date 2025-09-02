import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [names, setNames] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/name?search=' + search)
        console.log(response.data)
        setNames(response.data.name) 
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [search])

  if (error) {
    return <h1>Something went wrong...</h1>
  } 
  else if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Hello This is Rakesh</h1>
      <input type="text" placeholder='Search'
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of the names: {names.length}</h2>
    </>
  )
}

export default App
