import ActionBar from "../components/ActionBar";
import Notifications from "../components/Notifications";
import { useState } from "react";

export default function Story() {
    const [notification, setNotification] = useState(false)
    console.log(notification)
    let notificationClass = 'hidden'
    notification ? notificationClass = 'inline' : notificationClass = 'hidden'

    return (
        <div>
            <p>story</p>
            <Notifications classes={notificationClass} setNotification={setNotification} notification={notification} />
            <ActionBar setNotification={setNotification} notification={notification} />
        </div>
    )
}