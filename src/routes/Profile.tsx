import { ProfileType, profile, Images, profileImgs } from "../data"
import FollowSuggestions from "../components/FollowSuggestion"
import { Link } from "react-router-dom"
import ActionBar from "../components/ActionBar"
import Header from "../components/MobileHeader"
import { useState } from "react"
import Notifications from "../components/Notifications"

export default function Profile() {
    const [isFollowing, setFollow] = useState(true)
    const [notificationModal, setNotificationModal] = useState(false)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'
    const classes = isFollowing ? 'border w-1/2 rounded bg-0-doomBlue text-white p-1' : 'border w-1/2 rounded bg-black/50 text-white p-1'

    return (
        <div className="lg:flex lg:flex-row-reverse lg:justify-between h-svh hideScrollbar">
            <FollowSuggestions />
            <Header setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <div className="flex flex-col gap-4 m-4 lg:w-1/2 overflow-auto hideScrollbar">
                <div className="flex w-full">
                    {profile.map((profileData: ProfileType, index: number) => {
                        return <div key={index} className="flex flex-col w-full">
                            <p className="font-bold text-lg w-full text-center">{profileData.username}</p>
                            <div className="flex gap-4 text-center">
                                <img src={profileData.profileImg} alt={profileData.username} className="w-24 h-24 border rounded-full" />
                                <div className="flex w-full justify-around items-center">
                                    <div>
                                        <p className="font-bold">{profileData.posts}</p>
                                        <p>posts</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">{profileData.followers}</p>
                                        <p>followers</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">{profileData.following}</p>
                                        <p>following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-bold">{profileData.name}</p>
                                <p className="text-black/50">{profileData.pronouns}</p>
                            </div>
                            <p>{profileData.bio}</p>
                        </div>
                    })}
                </div>
                <div className="flex gap-2 ">
                    <button onClick={() => setFollow(!isFollowing)} className={classes}>{isFollowing ? 'Follow' : 'Following'}</button>
                    <Link to={'/messages'} className="border rounded bg-black/50 text-white w-1/2 flex items-center justify-center">
                        <button>Message</button>
                    </Link>
                </div>
                <div className=" grid grid-cols-3 w-full gap-1">
                    {profileImgs.map((imageData: Images, index: number) => {
                        return <div key={index} className="">
                            <img src={imageData.img} alt="" className="w-full h-full" />
                        </div>
                    })}
                </div>
            </div>
            <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
        </div >
    )
}