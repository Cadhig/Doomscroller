import { ProfileType, profile, ProfileImages, profileImgs } from "../data"
import ActionBar from "../components/ActionBar"
import Header from "../components/MobileHeader"
import { useState } from "react"

export default function Profile() {
    const [isFollowing, setFollow] = useState(true)
    const classes = isFollowing ? 'border w-1/2 rounded bg-0-doomBlue text-white p-1' : 'border w-1/2 rounded bg-black/50 text-white p-1'

    return (
        <div>

            <Header />
            <div className="flex flex-col gap-4 m-4">
                <div className="flex">
                    {profile.map((profileData: ProfileType, index: number) => {
                        return <div key={index} className="flex flex-col">
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
                    <button className="border rounded bg-black/50 text-white w-1/2">Message</button>
                </div>
                <div className=" grid grid-cols-3 w-full gap-1">
                    {profileImgs.map((imageData: ProfileImages, index: number) => {
                        return <div key={index} className="">
                            <img src={imageData.img} alt="" className="w-full h-full" />
                        </div>
                    })}
                </div>
                <ActionBar />
            </div>
        </div>
    )
}