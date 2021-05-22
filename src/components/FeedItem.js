import React from 'react';
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, MoreIcon2 } from "../icons/Icon";

export const FeedItem = ({ avatar, username, displayName, content, timestamp }) => {
    return (
        <div className="border border-gray-lightest hover:bg-gray-lightest">
            <div className="flex">
                <img className="w-11 h-11 ml-4 mt-4 rounded-full" src={avatar}></img>
                <div className="pl-3">
                    <ul className="flex w-full text-sm">
                        <li className=" mt-6 font-bold text-black">
                            {displayName}
                        </li>
                        <li className="mt-6 text-gray-dark pl-2">
                            {username}
                        </li>
                        <li className="mx-2 mt-8 bg-gray-dark h-1 w-1 border rounded-full" />
                        <li className="mt-6 text-gray-dark text-sm ">
                            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                        </li>
                        <div className="pl-72">
                            <div className="mt-4 flex items-center justify-center hover:bg-gray-extraLight hover:text-primary-base w-8 h-8 rounded-full text-gray-dark">
                                <MoreIcon2 />
                            </div>
                        </div>
                    </ul>
                    <span className="flex flex-col">{content}</span>
                </div>
            </div>
            <div className="flex px-20 w-full mt-4 mb-4 space-x-28 text-gray-dark">
                <div className="hover:bg-gray-extraLight rounded-full w-9 h-9 items-center flex justify-center hover:text-primary-base">
                    <ReplyIcon />
                </div>
                <div className="hover:bg-green-100 rounded-full w-9 h-9 items-center flex justify-center hover:text-green-400">
                    <RetweetIcon />
                </div>
                <div className="hover:bg-red-50 rounded-full w-9 h-9 items-center flex justify-center hover:text-red-500">
                    <LikeIcon />
                </div>
                <div className="hover:bg-gray-extraLight rounded-full w-9 h-9 items-center flex justify-center hover:text-primary-base">
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}
