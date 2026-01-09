import React, { useContext } from 'react'
import AppContext from './AppContext'

const Contact = () => {

  const {phone, name} = useContext(AppContext)
  // Most comon aim for Context api is to share current theme of your application with all its components or
  
  //to share the authenticated user with all of our components in our application or to sharethe result of an api call with all of our components in our application that will reduce the number of api calls

  return (
    <>
      <h2>Contact</h2>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
    </>
  )
}

export default Contact;
