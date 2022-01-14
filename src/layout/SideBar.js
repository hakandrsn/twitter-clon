import React, {useState} from 'react'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import logo from "../images/logo.gif"
import { sideLinks } from "./IconArray"
const SideBar = () => {
    const [active, setActive] = useState("Home")
    const handleMenuItemClick =(name)=>{
        setActive(name)
    }
    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2 bg-white'>
            <div>
                <div className='mt-1 
                mb-4 ml-1 flex 
                items-center 
                justify-center 
                w-12 h-12 
                rounded-full 
                hover:bg-gray-lightest 
                transform 
                transition-colors
                duration-200'
                >
                    <img src={logo} alt="Loading" className='w-9 h-9' />
                </div>
                <nav className='mb-4'>
                    <ul>
                        {sideLinks.map(({ name, icon }) => {
                            return (
                                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
                            )
                        })}
                    </ul>
                </nav>
                <button
                    className='bg-primary-base 
                hover:bg-primary-dark 
                text-white rounded-full 
                py-3 px-8 w-11/12 shadow-lg
                 transform transition-colors
                  duration-200'>
                    tweet
                </button>
            </div>
            <div>
              <UserBox />
            </div>

        </div>
    )
}

export default SideBar

