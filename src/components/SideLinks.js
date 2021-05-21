import React from 'react'

export const SideLinks = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name
    return (
        <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
            <a className="text-xl">
                <div className="inline-block">
                    <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full px-2 pl-3 pr-8 py-3
                    ${isActive ? "text-primary-base" : ""}
                    `}>
                        <span><Icon /></span>
                        <span className="ml-3 font-bold">{name}</span>
                    </div>
                </div>
            </a>
        </li>
    )
}