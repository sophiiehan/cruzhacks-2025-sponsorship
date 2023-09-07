import React from "react"
import ThemeProvider from "./contexts/ThemeContext/ThemeContext"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./views/Home/index.view"
// import LivePlaceholder from "./views/LivePlaceholder/index.view"
import BGwrapper from "./components/BGwrapper"

import "./App.scss"
import Team from "./views/Team/index.view"

const App: React.FC = () => {
  return (
    <div className='app'>
      <ThemeProvider>
        <Router>
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={BGwrapper(Home)} />
              <Route path='/team' element={BGwrapper(Team)} />
            </Routes>
            <Footer />
          </>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
