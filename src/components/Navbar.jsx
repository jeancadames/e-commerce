import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'

export const Navbar = () => {

  return (
    <>
        <div className="navbar-container">

            <p><Link to={'/gym'}>Gym</Link></p>
            <p><Link to={'/Basketball'}>Basketball</Link></p>
            <p><Link to={'/Volleyball'}>Volleyball</Link></p>
            <p><Link to={'/Tennis'}>Tennis</Link></p>
            <p><Link to={'/Boxing'}>Boxing</Link></p>
            {/* <p>
                <AiOutlineUser/>
                <Link to={'/myaccount'}>My Account</Link> 
                </p> */}

        </div>
    </>
  )
}
