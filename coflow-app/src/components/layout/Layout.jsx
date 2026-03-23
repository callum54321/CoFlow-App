import Header from './Header'
import Sidenav from './Sidenav'
import { useState } from 'react'

const Layout = ({children}) => {
    const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(true)

    const sidebarClick = () => {
        setSidebarIsCollapsed(prev => !prev)
        console.log('toggle clicked')
    }

    return (
        <div className='flex items-stretch'>
            <Sidenav sidebarIsCollapsed={sidebarIsCollapsed}/>

            <main className='flex flex-1 flex-col sbg-gray-100 h-screen w-full text-black bg-[#f9f8f5]'>
                <Header sidebarClick={sidebarClick}/>
                main content
                {children}
            </main>
        </div>
    )
}

export default Layout