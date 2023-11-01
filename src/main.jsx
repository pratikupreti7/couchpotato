import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from '../components/Layout/Layout'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../components/Navigation/ErrorPage/ErrorPage'
import About from '../components/Navigation/About/About'
import ContactUs from '../components/Navigation/Contact/ContactUs'
import Home from '../components/Navigation/Home/Home'
import SignUp from '../components/Navigation/SignUp/SignUp'
import SignIn from '../components/Navigation/SignIn/SignIn'
import ForgotPassword from '../components/Navigation/Profile/ForgotPassword'
import OTPVerification from '../components/Navigation/Profile/OTP/OTPVerification'
import ConfirmNewPassword from '../components/Navigation/Profile/ConfirmNewPassword'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <Home />,
      },
      {
        path: 'contactus/',
        element: <ContactUs />,
      },
      {
        path: 'aboutus/',
        element: <About />,
      },
      {
        path: 'signup/',
        element: <SignUp />,
      },
      {
        path: 'signin/',
        element: <SignIn />,
      },
      {
        path: 'forgotpassword/',
        element: <ForgotPassword />,
      },
      {
        path: 'verifyotp/',
        element: <OTPVerification />,
      },
      {
        path: 'confirmnewpassword/',
        element: <ConfirmNewPassword />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
