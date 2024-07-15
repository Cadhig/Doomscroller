import { House, Search, SquarePlus, Clapperboard, CircleUser, MessageCircleMore, Heart } from "lucide-react"
import DesktopHeader from "./DesktopHeader"
export default function ActionBar() {

    return (
        <div className="flex items-center justify-around h-14 fixed bottom-0 lg:static lg:w-1/4 lg:flex-col lg:h-full lg:justify-normal lg:items-start lg:gap-16 bg-white w-full lg:p-4 ">
            <DesktopHeader />
            <div className="flex items-center gap-4 text-lg font-bold">
                <House size={28} />
                <p className="hidden lg:inline">Home</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold">
                <Heart size={28} className="hidden lg:inline" />
                <p className="hidden lg:inline">Notifications</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold">
                <Search size={28} />
                <p className="hidden lg:inline">Search</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold">
                <SquarePlus size={28} />
                <p className="hidden lg:inline">Create</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold">
                <MessageCircleMore size={28} className="hidden lg:inline" />
                <p className="hidden lg:inline">Messages</p>
            </div>
            <Clapperboard size={28} className="inline lg:hidden" />
            <div className="flex items-center gap-4 text-lg font-bold">
                <CircleUser size={28} />
                <p className="hidden lg:inline">Profile</p>
            </div>
        </div>
    )
}