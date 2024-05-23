import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { ROUTES } from './routes/ROUTES'
import ContextShops from './context/ContextShops';

function App() {
  const [count, setCount] = useState(0)
const routesa = createBrowserRouter(ROUTES)
  return (
  <ContextShops>
  <RouterProvider router={routesa}/>
  </ContextShops>
  )
}

export default App
