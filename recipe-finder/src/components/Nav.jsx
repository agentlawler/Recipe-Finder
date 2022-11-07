import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

     let navigate= useNavigate()

    return (
        <nav className='navBar'>
            <div>
                <div className='link'><Link to='/'>Home</Link></div>
                <div className='link'><Link to='/Recipes'>Recipe List</Link></div>
                <div className='link'><Link to ='/Finder'>Find a Recipe</Link></div>
                <div className='link'><Link onClick={(() => navigate(-1))}>Back</Link></div>
            </div>
        </nav>
    )
}

export default Nav