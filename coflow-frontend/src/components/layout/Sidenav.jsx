import DashboardIcon from '../../assets/DashboardIcon.svg?react'
import MembersIcon from '../../assets/MembersIcon.svg?react'
import SpacesIcon from '../../assets/SpacesIcon.svg?react'
import EventsIcon from '../../assets/EventsIcon.svg?react'
import TasksIcon from '../../assets/TasksIcon.svg?react'
import AnnouncementsIcon from '../../assets/AnnouncementsIcon.svg?react'
import SettingsIcon from '../../assets/SettingsIcon.svg?react'
import HelpIcon from '../../assets/HelpIcon.svg?react'
import BrandConfig from '../../config/BrandConfig'
import { motion } from "motion/react"
import { NavLink } from 'react-router-dom'

const navItems = [
    {name: "Dashboard", href: "/dashboard", icon: DashboardIcon},
    {name: "Members", href: "/members", icon: MembersIcon},
    {name: "Spaces", href: "/spaces", icon: SpacesIcon},
    {name: "Events", href: "/events", icon: EventsIcon},
    {name: "Tasks", href: "/tasks", icon: TasksIcon},
    {name: "Announcements", href: "/announcements", icon: AnnouncementsIcon},
]

const supportItems = [
    {name: "Settings", href: "/settings", icon: SettingsIcon},
    {name: "Help", href: "/help", icon: HelpIcon}
]

function SidebarLink({ item, sidebarIsCollapsed }) {
    const Icon = item.icon
    
    return (
        <NavLink
        to={item.href}
        className='w-full flex items-center py-2 text-[#b1b1b1]
        hover:bg-[#2b303b] hover:text-[#ffffff]
        gap-3 pl-4 transition-all duration-0 rounded-md'>
            
            <div className='flex flex-col items-center w-5 h-5 shrink-0 transition-all duration-300'>
                <Icon className='max-w-full max-h-full'/>
            </div>
            
            <motion.h2
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: sidebarIsCollapsed ? 0 : 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='sidebar-name items-center whitespace-nowrap overflow-hidden'>
                {item.name}
            </motion.h2>
        </NavLink>
    )
}

function Sidenav({ sidebarIsCollapsed }) {

    return (
    <motion.div
    layout
    initial={{ width: '4rem' }}
    animate={{ width: sidebarIsCollapsed ? '4rem' : '16rem' }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    className='flex flex-col flex-nowrap bg-[#1d212b]'>

            {/* Brand Header */}
            <motion.div
            layout
            initial={{ paddingLeft: '0.75rem' }}
            animate={{ paddingLeft: sidebarIsCollapsed ? '0.75rem' : '1rem' }}
            className='flex items-center pt-5'>

                <motion.img src={BrandConfig.logo}
                alt={BrandConfig.name}
                layout
                initial={{ width: 38 }}
                animate={{ width: sidebarIsCollapsed ? 38 : 58 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='object-contain rounded-md'/>

                <motion.div 
                layout
                initial={{
                    opacity: 0,
                    display: 'none'
                }}
                animate={{
                    opacity: sidebarIsCollapsed ? 0 : 1,
                    display: sidebarIsCollapsed ? 'none' : 'flex'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='brand-name flex flex-nowrap whitespace-nowrap text-[#b1b1b1] pl-4'>
                    {BrandConfig.name}
                </motion.div>
            </motion.div>

            {/* Main Nav Items */}
            <nav className="flex flex-col">

                <motion.h3
                layout
                initial={{
                    opacity: 0,
                    padding: '3rem',
                    paddingLeft: '1rem',
                    paddingBottom: '1rem',
                }}
                animate={{
                    opacity: sidebarIsCollapsed ? 0 : 1,
                    padding: sidebarIsCollapsed ? '2rem' : '5rem',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='sidebar-header-text text-[#b1b1b1]'>
                    Main
                </motion.h3>

                {navItems.map(item => (
                    <SidebarLink key={item.name} item={item} sidebarIsCollapsed={sidebarIsCollapsed} />
                ))}

            </nav>

            {/* Support Nav Items */}
            <nav className="flex flex-col mt-auto">

                <motion.h3
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: sidebarIsCollapsed ? 0 : 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='sidebar-header-text text-[#b1b1b1] pl-4 pb-4 p-12'>
                    Support
                </motion.h3>

                {supportItems.map(item => (
                    <SidebarLink key={item.name} item={item} sidebarIsCollapsed={sidebarIsCollapsed} />
                ))}
            </nav>
    </motion.div>
    )
}

export default Sidenav