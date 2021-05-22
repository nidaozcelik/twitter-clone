import React, { useState } from 'react'
import profilePhoto from "../images/1599855165857.jpg";
import { MediaIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from "../icons/Icon";
import firebase from "firebase";
import db from "../firebase";

export const TweetBox = () => {
    const [content, setContent] = useState("")
    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                username: "@nidaozcelik",
                displayName: "Nida Özçelik",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: profilePhoto
            })
            setContent("");
        }
    }
    return (
        <div className="border border-gray-lightest">
            <span className="flex pl-4 mt-4">
                <img className="rounded-full w-11 h-11" src={profilePhoto} alt="profile photo"></img>
                <textarea className="pl-4 w-full outline-none text-xl overflow-hidden resize-none" placeholder="What's happening?"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
            </span>
            <div className="flex justify-between items-center pr-12">
                <span className="flex pt-4 pl-12">
                    <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <MediaIcon />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <GIFIcon />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <PollIcon />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <EmojiIcon />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <ScheduleIcon />
                    </div>
                </span>
                <button className=" w-20 h-10  bg-primary-base text-white rounded-full" onClick={sendTweet} >Tweet</button>
            </div>
        </div >
    )
}
