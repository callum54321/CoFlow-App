import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: '/signup', element: <SignUp />},
    {path: '/signin', element: <SignIn />},
])