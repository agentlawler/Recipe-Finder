import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

     let navigate= useNavigate()

    return (
        <nav className='navBar'>
            <img className='logo' src='https://cdn.discordapp.com/attachments/874654004213317705/1040059252703764521/16AFD423-4465-4985-84C2-E863D6EE51C1.png' alt='logo'/>
            <div className='linkBox'>
                <div className='link'>
                    <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
                </div>
                <div className='link'>
                    <Link style={{textDecoration: 'none'}} to='/Recipes'>Recipe List</Link>
                </div>
                <div className='link'>
                    <Link style={{textDecoration: 'none'}} to ='/ByMain'>By Name</Link>
                </div>
                {/* <div className='link'>
                    <Link style={{textDecoration: 'none'}} to ='/Finder'>Find a Recipe</Link>
                </div> */}
                <div className='link'>
                    <Link style={{textDecoration: 'none'}} onClick={(() => navigate(-1))}>Back</Link>
                </div>
                
            </div>
            
        </nav>
    )
}

export default Nav