import MenuIcon from '../../assets/MenuIcon.svg?react'

function Header() {
    return (
        <div className="flex flex-row items-center h-16 bg-[#ffffff] shadow-xs">
            <div className="flex text-[#383839] w-fit h-7">
                <MenuIcon className='pl-4 w-full h-full'/>
            </div>
            <div className='flex items-center text-[#383839]'>
                <h1 className='page-name pl-4 font-semibold'>Dashboard</h1>
            </div>
        </div>
    )
}

export default Header