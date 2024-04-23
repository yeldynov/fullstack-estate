import './layout.scss'
import Navbar from '../../components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const Layout = () => {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext)

  if (!currentUser) {
    return <Navigate to='/login' />
  }

  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
