import React from 'react'
import { urlFor } from '../../lib/client';

export const InlineContent = ({inlineImage}) => {

    const {image} = inlineImage;

  return (
    <>
        <div className="rectangle-container">
            <div className="rectangle-slogan">
                <h1>distinguish yourself from others</h1>
                <p>Make the difference</p>
            </div>
            {image &&
              <img src={urlFor(image)} className="floating-image"
              width={350}
              height={400}
              />
            }
        </div>
    </>
  )
}
