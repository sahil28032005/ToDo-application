import { useState } from 'react'
import NavBar from './components/NavBar'
import AppBody from './components/AppBody';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AboutUs from './components/AboutUs';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar /><AppBody/>
        </>
      ),
    },
    {
      path: "/AboutUs",
      element:
        <>
          <NavBar /><AboutUs />
        </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
