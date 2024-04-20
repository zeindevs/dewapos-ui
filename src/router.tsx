import { createBrowserRouter } from 'react-router-dom'

import Customer from './pages/app/customer'
import Dashboard from './pages/app/dashboard'
import Offer from './pages/app/offer'
import Payment from './pages/app/payment'
import POS from './pages/app/pos'
import Product from './pages/app/product'
import Report from './pages/app/report'
import Setting from './pages/app/setting'
import Transaction from './pages/app/transaction'
import ForgetPassword from './pages/auth/forget-password'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import Home from './pages/home'

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
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/app',
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'pos',
        element: <POS />,
      },
      {
        path: 'transaction',
        element: <Transaction />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'offer',
        element: <Offer />,
      },
      {
        path: 'customer',
        element: <Customer />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
])
