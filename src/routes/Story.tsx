import ActionBar from "../components/ActionBar";
import Notifications from "../components/Notifications";
import { useState } from "react";

export default function Story() {
    const [notificationModal, setNotificationModal] = useState(false)
    console.log(notificationModal)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'

    return (
        <div>
            <p>story</p>
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
        </div>
    )
}