import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Navigate to="/login" replace /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    }
])