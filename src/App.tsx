import { invoke } from '@tauri-apps/api'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/window" element={<Window />} />
    </Routes>

  )
}

function Index(){
  return(<>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h3>1. Create Window First</h3>
    <h3>2. FullScreen Window</h3>
    <div className="card">
      <button onClick={() => invoke('create_window')}>
        Create Window
      </button>
      <button onClick={() => invoke('set_fullscreen_window')}>
        FullScreen Window
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  </>)
}

function Window(){
  return(
    <div data-tauri-drag-region className='div-window'>
      <button onClick={() => invoke('close_window')}>
        Close Window
      </button>
    </div>
  )
}

export default App
