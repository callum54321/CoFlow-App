import Header from './Header'
import Sidenav from './Sidenav'
import { useState } from 'react'
import { motion } from 'motion/react'

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

            <main className={`relative flex flex-1 flex-col sbg-gray-100 h-screen
                w-full text-black bg-[#f9f8f5]`}>

                {/* Grey Out Overlay */}
                <motion.div
                layout
                animate={{
                    opacity: sidebarIsCollapsed ? 0 : 1,
                    pointerEvents: sidebarIsCollapsed ? 'none' : 'auto'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute bg-[#00000031] inset-0'
                onClick = {() => setSidebarIsCollapsed(true)}>
                </motion.div>

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