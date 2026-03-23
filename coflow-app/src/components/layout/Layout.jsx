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
        <>
        <div className='flex items-stretch'>
            {/* Sidebar */}
            <Sidenav sidebarIsCollapsed={sidebarIsCollapsed}/>

            <main className={`relative flex flex-1 flex-col sbg-gray-100 h-screen w-full text-black bg-[#f9f8f5]`}>

                {/* Grey Out Overlay */}
                <div className={`absolute bg-[#0000009b] inset-0 transform-gpu will-change-opacity transition-opacity duration-300 ease-in-out
                    ${sidebarIsCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    onClick = {() => setSidebarIsCollapsed(true)}
                    aria-hidden={sidebarIsCollapsed}>
                </div>

                {/* Main Content */}
                <Header sidebarClick={sidebarClick}/>
                main content
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout