import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SearchIcon } from "../icons/Icon";

export const Widgets = () => {
    return (
        <div className="w-3/12">
            <div>
                <div className="flex space-x-4 p-3 m-3 bg-gray-lightest text-gray-dark rounded-full items-center focus-within:ring-1 focus-within:ring-primary-base">
                    <SearchIcon />
                    <input className="rounded-full bg-transparent h-full items-center focus:outline-none w-full" type="text" placeholder="Search Twitter" />
                </div>
            </div>
            <div className="mt-4">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                        height: '600'
                    }}
                />
            </div>
        </div>
    )
}