import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../lib/client'


export const FooterBanner = ( {footerBanner: {discount, largeText1, largeText2, saleTime, midText, product, buttonText, image, smallText, desc} }) => {

  return (
      <div className='footer-banner-container cover'>
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link to={'/Gym'}>
              <button type='button'>{buttonText}</button>
            </Link>
            {/* {image &&
              <img src={urlFor(image)} className='footer-banner-image' 
              width={300}
              height={300}
              />
            } */}
          </div>
        </div>
      </div>
  )
}
