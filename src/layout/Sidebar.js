import React, { useState } from 'react'
import twitterLogo from "../images/images.png"
import { SideLinks } from "../components/SideLinks"
import {
    HomeIcon,
    ExploreIcon,
    NotificationIcon,
    MessageIcon,
    BookMarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon
} from "../icons/Icon";
import { UserBox } from '../components/UserBox';

const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon
    },
    {
        name: 'Explore',
        icon: ExploreIcon
    },
    {
        name: 'Notifacitons',
        icon: NotificationIcon
    },
    {
        name: 'Messages',
        icon: MessageIcon
    },
    {
        name: 'Booksmark',
        icon: BookMarksIcon
    },
    {
        name: 'Lists',
        icon: ListsIcon
    },
    {
        name: 'Profile',
        icon: ProfileIcon
    },
    {
        name: 'More',
        icon: MoreIcon
    },
]
export const Sidebar = () => {
    const [active, setActive] = useState('Home')
    const handleMenuItemClick = (name) => {
        setActive(name)
    }
    return (
        <div className="flex flex-col h-screen sticky top-0 justify-between bg-white w-3/12 px-6">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
                    <a href="Home">
                        <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
                    </a>
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLinks key={name}
                                name={name}
                                Icon={icon}
                                active={active}
                                onMenuItemClick={handleMenuItemClick}
                            />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200">Tweet</button>
            </div>
            <div><UserBox /></div>
        </div>
    )
}