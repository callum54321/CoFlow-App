import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Layout from './components/layout/Layout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/login', element: <Login /> },
        ]
    }
])