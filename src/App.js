import { Suspense } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import ThreeBG from './components/ThreeBG/threebg'
import Navbar from './components/navabr'

import Home from './components/Home';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import About from './components/About';

import { Canvas } from '@react-three/fiber'

export default function App() {

  const config = { fov: 75, position: [0, 10, 25], up: [0, 1, 0], near: 0.1, far: 10000 } 

  return (
    <>
      <main>
          <div className='three'>
              <Canvas camera={config}>
              <ThreeBG/>
              </Canvas>
          </div>
          <Navbar></Navbar>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/Home' element = {<Home />} />
            <Route path = '/Events' element = {<Events />} />
            <Route path = '/Sponsors' element = {<Sponsors />} />
            <Route path = '/About' element = {<About />} />
          </Routes>
      </main>
    </>
  )
}
