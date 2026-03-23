import DashboardIcon from '../../assets/DashboardIcon.svg?react'
import MembersIcon from '../../assets/MembersIcon.svg?react'
import SpacesIcon from '../../assets/SpacesIcon.svg?react'
import EventsIcon from '../../assets/EventsIcon.svg?react'
import TasksIcon from '../../assets/TasksIcon.svg?react'
import AnnouncementsIcon from '../../assets/AnnouncementsIcon.svg?react'
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

    return (
    <div className={`flex flex-col bg-[#1d212b] ${sidebarIsCollapsed ? 'w-16' : 'w-64'}`}>
            {/* Brand Header */}
            <div className={`${!sidebarIsCollapsed && `flex items-center gap-2 p-4 pb-15 w-full`}`}>
                <img src={BrandConfig.logo}
                alt={BrandConfig.name}
                className='w-9 h-9 object-contain rounded-md'/>
                <div className='brand-name text-[#b1b1b1] pl-1'>{BrandConfig.name}</div>
            </div>

            {/* Nav Items */}
            <h3 className='text-[#b1b1b1] sidebar-header-text pl-4 py-2'>Main</h3>
            {navItems.map(item => {
                const Icon = item.icon
                return (
                    <a key={item.name}
                    href={item.href}
                    className='flex items-center gap-3 px-4 py-1.5 text-[#b1b1b1] hover:bg-[#2b303b] transition-colors rounded-2xl hover:text-[#ffffff]'>
                        <div className='w-4 h-4 flex items-center justify-center shrink-0'>
                            <Icon className='max-w-full max-h-full'/>
                        </div>
                        <h2 className='sidebar-name'>
                        {item.name}
                        </h2>
                    </a>
                )
            })}
    </div>
    )
}

export default Sidenav