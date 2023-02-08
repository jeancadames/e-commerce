import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegisterLogin } from '../auth/pages/RegisterLogin'
import { HomePage } from '../HomePage'
import { useProducts } from '../hooks'
import { Gym, Basketball, Tennis,  Boxing, Volleyball } from '../pages/Departments/index'
// import App from '../pages/api/App'
import { ProductDetails } from '../pages/product/ProductDetails'

export const AppRouter = () => {

  const {products} = useProducts();
  
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            {products.map((product) => (product && <Route key={product._id} path={`product/${product.slug.current}`} element={<ProductDetails product={product}/>}/>))}
            {/* <Route path='checkout' element={<App/>}/> */}
            <Route path='/myaccount' element={<RegisterLogin/>}/>
            <Route path='/gym' element={<Gym/>} />
            <Route path='/Basketball' element={<Basketball/>} />
            <Route path='/Volleyball' element={<Volleyball/>} />
            <Route path='/Boxing' element={<Boxing/>} />
            <Route path='/Tennis' element={<Tennis/>} />
        </Routes>
    </>
  )
}
