import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
])
