import { House, Search, SquarePlus, Clapperboard, CircleUser, MessageCircleMore, Heart } from "lucide-react"
import DesktopHeader from "./DesktopHeader"
export default function ActionBar() {

    return (
        <div className="flex items-center justify-around h-14 fixed bottom-0 lg:static lg:w-1/4 lg:flex-col lg:h-full lg:justify-normal lg:items-start lg:gap-16 bg-white w-full lg:p-4 ">
            <DesktopHeader />
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <House size={28} />
                <p className="hidden lg:inline hover:underline">Home</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <Heart size={28} className="hidden lg:inline" />
                <p className="hidden lg:inline hover:underline ">Notifications</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <Search size={28} />
                <p className="hidden lg:inline hover:underline">Search</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <SquarePlus size={28} />
                <p className="hidden lg:inline hover:underline">Create</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <MessageCircleMore size={28} className="hidden lg:inline" />
                <p className="hidden lg:inline hover:underline">Messages</p>
            </div>
            <Clapperboard size={28} className="inline lg:hidden" />
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <CircleUser size={28} />
                <p className="hidden lg:inline hover:underline">Profile</p>
            </div>
        </div>
    )
}