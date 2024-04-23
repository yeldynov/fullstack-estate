import { useContext, useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const { currentUser } = useContext(AuthContext)

  return (
    <nav>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src='/logo.png' alt='Main Logo' />
          <span>BetterEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>
      <div className='right'>
        {currentUser ? (
          <div className='user'>
            <img src={currentUser.avatar || '/favicon.png'} alt='User Avatar' />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile'>
              <div className='notification'>3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign In</Link>
            <Link to='/register' className='register'>
              Sign Up
            </Link>
          </>
        )}
        <div className='menuIcon'>
          <img
            src='/menu.png'
            alt='Menu Icon'
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          <Link to='/'>Sign In</Link>
          <Link to='/'>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
