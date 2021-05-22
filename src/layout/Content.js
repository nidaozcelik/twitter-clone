import React, { useState, useEffect } from 'react'
import { TopTweets } from "../icons/Icon";
import { TweetBox } from "../components/TweetBox";
import { Divider } from "../components/Divider";
import { FeedList } from '../components/FeedList';
import db from "../firebase";

export const Content = () => {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        db.collection("feed")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setTweets(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    return (
        <div className="w-6/12">
            <div className="flex sticky top-0 bg-white justify-between font-extrabold text-xl pt-4 pl-4 pb-4 border border-gray-lightest items-center">
                <span>Home</span>
                <span><TopTweets /></span>
            </div>
            <TweetBox />
            <Divider />
            {/* <div className="w-full h-screen border border-gray-lightest"></div> */}
            <FeedList tweets={tweets} />
        </div>
    )
}