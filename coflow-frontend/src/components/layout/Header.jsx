import MenuIcon from '../../assets/MenuIcon.svg?react'
import { useLocation } from 'react-router-dom';

function Header({ sidebarClick }) {
    const location = useLocation()

    const getPageTitle = () => {
        const path = location.pathname.split('/').filter(Boolean).pop()

        //Empty path edge case
        if (!path) {
            return 'Home'
        }
        
        return path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (
        <div className="flex flex-row items-center h-16 bg-white shadow-sm">
            <button 
                onClick={sidebarClick}
                className="flex transition-all duration-100 ml-4 items-center justify-center w-8 h-8 cursor-pointer text-gray-800 hover:bg-[#dd601e] hover:text-white rounded-lg"
                aria-label="Toggle sidebar"
            >
                <MenuIcon className="w-5 h-5" />
            </button>

            <div className='pl-3'>{getPageTitle()}</div>
        </div>
    )
}

export default Header