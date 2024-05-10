import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import './App.css'
import MainContext from './context/context'
import axios from 'axios'

const App = () => {
  const router = createBrowserRouter(ROUTES)

  const[data, setData] = useState([])
  
  const[loading, setLoading] = useState(true)
  const[error, setError] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData([...res.data])
      console.log([...res.data]);
      setLoading(false)
    }).catch(error=>{
      setError(error)
      setLoading(false)
    })
  }, [])

  const contextData ={
    data, setData, error, setError, loading, setLoading
  }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  )
}

export default App