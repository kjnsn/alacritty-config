import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { printConfig } from './load.ts'
printConfig({
  live_config_reload: true,
  shell: "/bin/zsh",
  scrolling: {
    history: 1_000,
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
