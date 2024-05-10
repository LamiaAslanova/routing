import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import './App.css'
import MainContext from './context/context'
import axios from 'axios'

const App = () => {
  const router = createBrowserRouter(ROUTES)

  const[data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      console.log(res);
    })
  }, [])

  const contextData ={
    data, setData
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