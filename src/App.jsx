import { useEffect, useState } from 'react'

import './App.css'
import {DataDisplay} from "./components/DataDisplay"

function App() {

  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,SetError] = useState(false)

  async function fetchData(){
   setIsLoading(true)
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      let finalData = await res.json()
      setData(finalData)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      SetError(true)
    }
  }

  return (
    <>
    < DataDisplay data={data}/>
    {isLoading? <p>Data is Loading please Wait</p> : <button onClick={fetchData}>Click here</button> }
    
    
    </>
  )
}

export default App
