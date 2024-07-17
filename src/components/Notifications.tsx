import { X } from "lucide-react"
import { Notification } from "../main"
export default function Notifications({ setNotification, notification, classes }: Notification) {

    return (
        <div className={classes}>
            <div className="fixed pt-24 left-0 top-0 w-full h-full overflow-auto bg-black/15 flex justify-center">
                <div className="bg-white  h-1/2 w-64 lg:w-1/4 border rounded shadow-lg flex flex-row-reverse">
                    <X size={32} className="text-red-700" onClick={() => setNotification(!notification)} />
                </div>
            </div>
        </div>
    )
}