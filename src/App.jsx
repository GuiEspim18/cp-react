import React from "react"
import Cabecalho from "./components/Cabecalho"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
export default function App() {
  
  return (
    <>
      <React.Fragment>
        <div className="container">
          <Cabecalho/>
          <Outlet/>
          <Footer/>
        </div>
      </React.Fragment>
    </>
  )
}
