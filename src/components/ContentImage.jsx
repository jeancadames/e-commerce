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
                    <img src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="basketball-image" />
                    <h2>Explosiveness</h2>
                </div>
                </Link>
                <Link to={'/Boxing'}>
                <div className="boxing-bg">
                    <img src="https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80" alt="boxing-image" />
                    <h2>Strength</h2>
                </div>
                </Link>
                <Link to={'/Tennis'}>
                <div className="tennis-bg">
                    <img src="https://images.unsplash.com/photo-1583275478661-1c31970669fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="tensis-image" />
                    <h2>Precision</h2>
                </div>
                </Link>
            </div>
        </div>
    </>
  )
}
