import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (<div className="container">
    <Link className="button" to="/form">Create a new resume</Link>
  </div>)
}

export default Home