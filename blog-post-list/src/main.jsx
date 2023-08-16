import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './context/PostProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostProvider>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </PostProvider>
)
