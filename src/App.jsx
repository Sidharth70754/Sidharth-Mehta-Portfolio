import React from 'react'
import Pages1 from './pages/Pages1'
import Header from './components/Header'
// import Pages2 from './pages/Pages2'
// import Pages3 from './pages/Pages3'
import Pages4 from './pages/Projects'
import Pages5 from './pages/About'
// import Pages6 from './pages/Pages6'
import Projects from './pages/Projects'
import AchievementsPage from './pages/AchievementsPage'
import About from './pages/About'
import { Contact } from './pages/Contact'
const App = () => {
  return (
    <>
    <div id = "main">
    <Header />
    <Pages1 />
    <About />
    {/* <Pages2 /> */}
    {/* <Pages3 /> */}
    <Projects />
    <AchievementsPage />
    {/* <Pages6 /> */}
    <Contact /> 
    
    </div>
    </>
  )
}

export default App