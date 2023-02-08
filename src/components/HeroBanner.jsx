
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../lib/client'

export const HeroBanner = ({banners}) => {

  let bannersBg = ['assets/volleyball player bg.jpg', 'assets/basektball-player-bg.jpg']

  const [bannerBg, setBannerBg] = useState(bannersBg[1]);


  return (
    <div className="hero-banner-container" style={{}}>
      <div>
        <p className="beats-solo">{banners.smallText}</p>
        <h3>{banners.midText}</h3>
        <h1>{banners.largeText2}</h1>

        {/* {banners.image &&
        <img src={urlFor(banners.image)} alt="basketball" className='hero-banner-image' />
        } */}
        
        <div>
          <Link to={'Basketball'}>
            <button type='button'>{banners.buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{banners.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
