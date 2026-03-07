import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <main id="main-content" role="main">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Training />
                <Certifications />
                <Education />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App
