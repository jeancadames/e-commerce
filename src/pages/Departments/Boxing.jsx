import React from 'react'
import { Product } from '../../components';
import { useProducts } from '../../hooks/useProducts';

export const Boxing = () => {
  const {products} = useProducts();
  const productsCategory = products.filter((product) => product.category === 'Boxing');



  return (
    <>
      <div className="dpt-title">
        <h2>Boxing</h2>
        <span>{productsCategory.length} products</span>
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
      <div className="products-category-container">
        {productsCategory?.map((product) => ( <Product key={product._id} product={product}/>
        ))}
      </div>
    </>
  )
}
