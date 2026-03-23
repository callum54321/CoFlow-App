import MenuIcon from '../../assets/MenuIcon.svg?react'

function Header({ sidebarClick }) {
    return (
        <div className="flex flex-row items-center h-16 bg-white shadow-sm">
            <button 
                onClick={sidebarClick}
                className="flex transition-all duration-100 ml-4 items-center justify-center w-8 h-8 cursor-pointer text-gray-800 hover:bg-[#dd601e] hover:text-white rounded-lg"
                aria-label="Toggle sidebar"
            >
                <MenuIcon className="w-5 h-5" />
            </button>
            <h1 className="pl-3.5 font-semibold text-gray-800">
                Dashboard
            </h1>
        </div>
    )
}

export default Header