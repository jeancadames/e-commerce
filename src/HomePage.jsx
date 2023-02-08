import React from 'react';
import { Footer, FooterBanner, HeroBanner, Product } from './components';
import { ContentImage } from './components/ContentImage';
import { InlineContent } from './components/InlineContent';
import { useProducts, useBanners } from './hooks';

export const HomePage = () => {
  
  const {products} = useProducts();
  const {banners} = useBanners();

  return (
    <>

    <HeroBanner banners={banners.length && banners[0]}/>

      <div className='banner-heading'>
        <h2>Be an athlete</h2>
        <p>Be the best one</p>
      </div>

      <div className='products-container' >
        {products?.slice(0,5).map((product) => ( <Product key={product._id} product={product}/>
        ))}
      </div>

      <ContentImage/>

      <InlineContent inlineImage={banners.length && banners[2]}/>

      <FooterBanner footerBanner={banners.length && banners[0]}/>
    </>
  )



}
