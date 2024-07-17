import { Heart, MessageCircleMore } from "lucide-react"
import { Link } from "react-router-dom"
import { Notification } from "../main"

export default function Header({ setNotificationModal, notificationModal }: Notification) {

    return (
        <div className="flex justify-between items-center m-4 lg:hidden">
            <Link to={'/'}>
                <p className="instagram">DoomScroller</p>
            </Link>
            <div className="flex gap-4 cursor-pointer">
                <Heart className="active:text-black/60" onClick={() => setNotificationModal(!notificationModal)} />
                <Link to={'/messages'}>
                    <MessageCircleMore className="active:text-black/60" />
                </Link>
            </div>
        </div>
    )
}