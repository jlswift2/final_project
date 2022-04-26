import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login() {
  
  let signupButton = <button>Signup</button>
    return (
        <div>
            <LoginForm />
            {signupButton}
        </div>
    )
}

export default Login