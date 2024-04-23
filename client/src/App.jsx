import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, RequireAuth } from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ListPage from './pages/ListPage/ListPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SinglePage from './pages/SinglePage/SinglePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProfileUpdatePage from './pages/ProfileUpdatePage/ProfileUpdatePage'
import NewPostPage from './pages/NewPostPage/NewPostPage'
import {
  listPageLoader,
  singlePageLoader,
  profilePageLoader,
} from './lib/loaders'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/list', element: <ListPage />, loader: listPageLoader },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <RegisterPage /> },
        { path: '/:id', element: <SinglePage />, loader: singlePageLoader },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        { path: '/profile/update', element: <ProfileUpdatePage /> },
        { path: '/add', element: <NewPostPage /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
