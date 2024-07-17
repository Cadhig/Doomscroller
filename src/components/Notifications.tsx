import { X } from "lucide-react"
import { Notification } from "../main"
import { notificationsForUser, NotificationForUser } from "../data"
export default function Notifications({ setNotification, notification, classes }: Notification) {

    return (
        <div className={classes}>
            <div className="fixed pt-24 left-0 top-0 w-full h-full overflow-auto bg-black/15 flex justify-center">
                <div className="bg-white  h-1/2 w-64 lg:w-1/4 border rounded shadow-lg flex flex-row-reverse">
                    <X size={32} className="text-red-700" onClick={() => setNotification(!notification)} />
                    <div className="overflow-auto flex flex-col gap-1 p-2 hideScrollbar w-full">
                        {notificationsForUser.map((notifData: NotificationForUser, index: number) => {
                            return <div key={index} className="flex gap-2 items-center">
                                <img src={notifData.img} alt="user image" className="size-12 border rounded-full object-cover flex-shrink-0" />
                                <div className="flex flex-col overflow-hidden">
                                    <p className="">{notifData.username}</p>
                                    <p className="truncate text-sm">{notifData.status}{notifData.comment}</p>
                                    <p className="text-xs text-black/50">{notifData.time}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}