import React from 'react'
import profilResim from "../images/1599855165857.jpg"

export const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 rounded-full hover:bg-primary-light px-4 py-2 cursor-pointer">
            <img className="rounded-full w-12 h-12" src={profilResim} alt="profil resmi"/>
            <div className="flex flex-col">
                <span className="flex flex-row text-md font-bold">Nida Özçelik</span>
                <span className="text-gray-dark text-sm">@nidaozcelik</span>
            </div>
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-black rounded-full" />
                <div className="w-1 h-1 bg-black rounded-full" />
                <div className="w-1 h-1 bg-black rounded-full" />
            </div>
        </div>
    )
}