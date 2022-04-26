import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
      });

    function handleFormChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formData)
    }
  
  
    return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleFormChange}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default LoginForm