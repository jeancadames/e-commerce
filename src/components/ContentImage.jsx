import React from 'react'
import { Link } from 'react-router-dom';

export const ContentImage = () => {
  return (
    <>
        <div className="images-content-container">
            <h1>Practice makes perfection</h1>
            <p>Constancy makes changes</p>
            <div className="images-container">
                <Link to={'Basketball'}>
                <div className="basketball-bg">
                    <img src="assets\basketball bg.avif" alt="basketball-image" />
                    <h2>Explosiveness</h2>
                </div>
                </Link>
                <Link to={'/Boxing'}>
                <div className="boxing-bg">
                    <img src="assets\boxing bg.avif" alt="boxing-image" />
                    <h2>Strength</h2>
                </div>
                </Link>
                <Link to={'/Tennis'}>
                <div className="tennis-bg">
                    <img src="assets\tennis bg.avif" alt="tensis-image" />
                    <h2>Precision</h2>
                </div>
                </Link>
            </div>
        </div>
    </>
  )
}
