import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components'
import { ECommerceApp } from './ECommerceApp'
import { Toaster } from 'react-hot-toast'
import {StateProvider} from './context/StateProvider';



ReactDOM.createRoot(document.getElementById('root')).render(

  
  // <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
          <Layout>
            <Toaster/>
            <ECommerceApp/>
          </Layout>
      </StateProvider>
    </BrowserRouter>
  // </React.StrictMode>
)
