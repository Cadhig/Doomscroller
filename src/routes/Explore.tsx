import Header from "../components/MobileHeader"
import ActionBar from "../components/ActionBar"
import { explore, Images } from "../data"
import FollowSuggestions from "../components/FollowSuggestion"
import { useState } from "react"
import Notifications from "../components/Notifications"
export default function Explore() {
    const [notificationModal, setNotificationModal] = useState(false)
    console.log(notificationModal)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'
    return (
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between h-svh hideScrollbar">
            <FollowSuggestions />
            <Header />
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <div className=" flex flex-col gap-4 m-4 lg:w-1/2 overflow-auto hideScrollbar">
                <div className="flex justify-center">
                    <input type="text" placeholder="explore" className="bg-black/10 w-3/4 border rounded-xl px-1" />
                </div>
                <div className="grid grid-cols-3 w-full gap-1">
                    {explore.map((exploreData: Images, index: number) => {
                        return <div key={index}>
                            <img src={exploreData.img} alt="exploreImg" className="w-full h-full object-cover" />
                        </div>
                    })}
                </div>
            </div>
            <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
        </div>
    )
}