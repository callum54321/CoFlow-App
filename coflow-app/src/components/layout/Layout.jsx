import Header from './Header'
import Sidenav from './Sidenav'
import { useState } from 'react'


const Layout = ({children}) => {
    const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(false)

    return (
        <div className='flex items-stretch'>
            <Sidenav className='h-screen'/>

            <main className='flex flex-1 flex-col sbg-gray-100 h-screen w-full text-black bg-[#f9f8f5]'>
                <Header />
                main content
                {children}
            </main>
        </div>
    )
}

export default Layout