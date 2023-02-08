import React from 'react'

export const RegisterLogin = () => {
  return (
    <>  
        <div className="login-register-container">
            <div className="form-container">
                <h2>Log in</h2>
                <form>
                    <input type="text" 
                    placeholder='Email'
                    className='form-input'
                    />

                    <input type="password" 
                    placeholder='Password'
                    className='form-input'
                    />

                    <input type="button"
                    className='form-btn' 
                    value="Login" />
                </form>
            </div>
            <div className="form-container">
                <h2>Register</h2>
                <form>
                    <input type="text"
                    placeholder='Name'
                    className='form-input'
                    />

                    <input type="text" 
                    placeholder='Email'
                    className='form-input'
                    />

                    <input type="password" 
                    placeholder='Password'
                    className='form-input'
                    />
                    
                    <input type="button" 
                    className='form-btn'
                    value="Register" />
                </form>
            </div>
        </div>
    </>
  )
}
