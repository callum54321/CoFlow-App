import Header from '/src/components/layout/Header'
import Sidenav from '/src/components/layout/Sidenav'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'

const App = () => {
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
                initial={{
                    opacity: 0,
                    pointerEvents: 'none'
                }}
                animate={{
                    opacity: sidebarIsCollapsed ? 0 : 1,
                    pointerEvents: sidebarIsCollapsed ? 'none' : 'auto'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute bg-[#0000003b] inset-0'
                onClick = {() => setSidebarIsCollapsed(true)}>
                </motion.div>

                {/* Main Content */}
                <Header sidebarClick={sidebarClick}/>

                <Outlet />

            </main>
        </div>
        </>
    )
}

export default App