
import './App.css'
import ColorContextProvider from './context/ColorContextProvider';
import { ROUTES } from './routes/ROUTES'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
const routesa = createBrowserRouter(ROUTES)
  return (
   <>
   <ColorContextProvider>
   <RouterProvider router={routesa}/>

   </ColorContextProvider>
   </>
  )
}

export default App
