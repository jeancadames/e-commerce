import React from 'react'
import { Product } from '../../components';
import { useProducts } from '../../hooks/useProducts';

export const Basketball = () => {
  const {products} = useProducts();
  const productsCategory = products.filter((product) => product.category === 'Basketball');



  return (
    <>
      <div className="dpt-title">
        <h2>Basketball</h2>
        <span>
          {productsCategory.length}
          12 products</span>
      </div>
      <div className="dpt-line"></div>


      <div className="products-category-container">
        {productsCategory?.map((product) => ( <Product key={product._id} product={product}/>
        ))}
      </div>
      <div className="products-category-container">
        {productsCategory?.map((product) => ( <Product key={product._id} product={product}/>
        ))}
      </div>
      <div className="products-category-container">
        {productsCategory?.map((product) => ( <Product key={product._id} product={product}/>
        ))}
      </div>
    </>
  )
}
