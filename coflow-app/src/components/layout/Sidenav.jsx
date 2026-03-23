import DashboardIcon from '../../assets/DashboardIcon.svg?react'
import MembersIcon from '../../assets/MembersIcon.svg?react'
import SpacesIcon from '../../assets/SpacesIcon.svg?react'
import EventsIcon from '../../assets/EventsIcon.svg?react'
import TasksIcon from '../../assets/TasksIcon.svg?react'
import AnnouncementsIcon from '../../assets/AnnouncementsIcon.svg?react'
import SettingsIcon from '../../assets/SettingsIcon.svg?react'
import HelpIcon from '../../assets/HelpIcon.svg?react'
import BrandConfig from '../../config/BrandConfig'

function Sidenav({ sidebarIsCollapsed }) {

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

    return (
    <div className={`flex flex-col flex-nowrap bg-[#1d212b] transition-[width] duration-500 ease-in-out ${sidebarIsCollapsed ? 'w-14' : 'w-64'}`}>
            {/* Brand Header */}
            <div className='flex items-center p-4 pt-5'>

                <img src={BrandConfig.logo}
                alt={BrandConfig.name}
                className={`object-contain rounded-md transition-all duration-600
                    ${sidebarIsCollapsed ? 'w-6 h-6 transform-gpu' : 'w-9 h-9'}`}
                />

                <div className={`brand-name text-[#b1b1b1] pl-4 ease-in-out
                duration-500 whitespace-nowrap overflow-hidden
                    ${sidebarIsCollapsed ? 'transform-gpu opacity-0' : 'opacity-100 w-auto pl-4'}`}>
                    {BrandConfig.name}
                </div>
            </div>

            {/* Main Nav Items */}
            <div className="flex flex-col gap-1">
                <h3 className={`text-[#b1b1b1] sidebar-header-text pl-4 mt-12 mb-4 ease-in-out duration-500
                    ${sidebarIsCollapsed ? 'transform-gpu opacity-0' : 'opacity-100 w-auto pl-4'}`}>
                    Main
                </h3>
                {navItems.map(item => {
                    const Icon = item.icon
                    return (
                        <a key={item.name}
                            href={item.href}
                            className='flex items-center py-1 text-[#b1b1b1]
                            hover:bg-[#2b303b] rounded-xl hover:text-[#ffffff]
                            gap-3 px-4'>
                            
                            <div className='flex items-center w-4 h-4 shrink-0 transition-all duration-600'>
                                <Icon className='max-w-full max-h-full'/>
                            </div>
                            
                            <h2 className={`sidebar-name whitespace-nowrap overflow-hidden transition-all duration-600
                                ${sidebarIsCollapsed ? 'transform-gpu opacity-0' : 'opacity-100'}`}>
                                {item.name}
                            </h2>
                        </a>
                    )
                })}
            </div>

            {/* Support Nav Items */}
            <div className="flex flex-col gap-1 mt-auto text-[#b1b1b1]">
                <h3 className={`text-[#b1b1b1] sidebar-header-text pl-4 mt-12 mb-2 ease-in-out duration-500
                    ${sidebarIsCollapsed ? 'transform-gpu opacity-0' : 'opacity-100 w-auto pl-4'}`}>
                    Support
                </h3>

                {supportItems.map(item => {
                const Icon = item.icon
                return (
                    <a key={item.name}
                        href={item.href}
                        className='flex items-center py-1 text-[#b1b1b1]
                        hover:bg-[#2b303b] rounded-xl hover:text-[#ffffff]
                        gap-3 px-4'>
                        
                        <div className='flex items-center w-4 h-4 shrink-0 transition-all duration-600'>
                            <Icon className='max-w-full max-h-full'/>
                        </div>
                        
                        <h2 className={`sidebar-name whitespace-nowrap overflow-hidden transition-all duration-600
                            ${sidebarIsCollapsed ? 'transform-gpu opacity-0' : 'opacity-100'}`}>
                            {item.name}
                        </h2>
                    </a>
                )
            })}
                
            </div>

            {/* Footer Profile */}
            <div className="border text-white h-20">
                
            </div>
    </div>
    )
}

export default Sidenav