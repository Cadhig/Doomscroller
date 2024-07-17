import ActionBar from "../components/ActionBar"
import { SquarePen } from "lucide-react"
import { Messages, messages, messageRequests } from "../data"
import { useState } from "react"
import FollowSuggestions from "../components/FollowSuggestion"
import Notifications from "../components/Notifications"
export default function Dms() {
    const [isPrimary, setIsPrimary] = useState(true)
    const [notificationModal, setNotificationModal] = useState(false)
    console.log(notificationModal)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'
    const messageView = isPrimary ? messages : messageRequests
    const primaryClasses = isPrimary ? 'w-1/2 border rounded bg-[#4c68d7] text-white' : 'w-1/2 border rounded bg-black/50 text-white'
    const requestsClasses = isPrimary ? 'w-1/2 border rounded bg-black/50 text-white' : 'w-1/2 border rounded bg-[#4c68d7] text-white'

    return (
        <div className="lg:flex lg:flex-row-reverse lg:justify-between h-svh hideScrollbar w-full">
            <FollowSuggestions />
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <div className="flex flex-col gap-4 m-4 lg:w-1/2">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Messages</h1>
                    <SquarePen />
                </div>
                <div className="flex gap-2 w-full">
                    <button onClick={() => setIsPrimary(true)} className={primaryClasses}>Primary</button>
                    <button onClick={() => setIsPrimary(false)} className={requestsClasses}>Requests</button>
                </div>
                {messageView.map((messageData: Messages, index: number) => {
                    return <div key={index} className="flex gap-2 w-full">
                        <img src={messageData.img} alt={messageData.username} className="w-12 h-12 object-cover border rounded-full" />
                        <div className="flex flex-col w-1/2">
                            <p>{messageData.username}</p>
                            <p className="truncate text-black/50">{messageData.message}</p>
                        </div>
                    </div>
                })}
            </div>
            <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
        </div>
    )
}