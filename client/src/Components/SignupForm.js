import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
    mutation CreateUser (
        $username: String!,
        $password: String!,
        $email: String!,
        $firstName: String!,
        $lastName: String!
    ) {
        createUser(input: {username: $username, authProvider:{credentials: {password: $password, email: $email}}, firstName: $firstName, lastName: $lastName}){
            id
            username
            firstName
            friendCode
        }
    }
`;

// mutation{
//     createUser(input: {
//       username: "Test",
//       firstName: "Timmy",
//       lastName: "Sloop",
//       authProvider: {
//         credentials: {
//           email: "justin@please.com",
//           password: "12345"
//         }
//       }
//     }) {
//       id
//       firstName
//       email
//     }
//   }
  

function SignupForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        first_name: "",
        last_name: ""
      });

    const [createUser] = useMutation(CREATE_USER, {
        variables: {
            username: formData.username,
            password: formData.password,
            email: formData.email,
            firstName: formData.first_name,
            lastName: formData.last_name
        }
    })

    function handleFormChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formData)
        createUser();
    }
  
  
    return (
    <div>
        <h1>Signup Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleFormChange}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleFormChange}
            />
            <label htmlFor="email">Email Address:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
            />
            <label htmlFor="username">Desired Username:</label>
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

export default SignupForm

