import { House, Compass, SquarePlus, Clapperboard, CircleUser, MessageCircleMore, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import DesktopHeader from "./DesktopHeader"
export default function ActionBar() {

    return (
        <div className="flex items-center justify-around h-14 fixed bottom-0 lg:static lg:w-1/4 lg:flex-col lg:h-full lg:justify-normal lg:items-start lg:gap-16 bg-white w-full lg:p-4 ">
            <DesktopHeader />
            <Link to={'/'}>
                <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                    <House size={28} />
                    <p className="hidden lg:inline hover:underline">Home</p>
                </div>
            </Link>
            <div className="hidden lg:flex lg:items-center lg:gap-4 lg:text-lg lg:font-bold lg:cursor-pointer">
                <Heart size={28} className=" lg:inline" />
                <p className=" lg:block hover:underline ">Notifications</p>
            </div>
            <Link to={'/explore'}>
                <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                    <Compass size={28} />
                    <p className="hidden lg:inline hover:underline">Explore</p>
                </div>
            </Link>
            <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                <SquarePlus size={28} />
                <p className="hidden lg:inline hover:underline">Create</p>
            </div>
            <div className="hidden lg:inline">
                <Link to={'/messages'}>
                    <div className="hidden lg:flex lg:items-center lg:gap-4 lg:text-lg lg:font-bold lg:cursor-pointer">
                        <MessageCircleMore size={28} className="hidden lg:inline" />
                        <p className="hidden lg:inline hover:underline">Messages</p>
                    </div>
                </Link>
            </div>
            <Clapperboard size={28} className="inline lg:hidden" />
            <Link to={'/profile'}>
                <div className="flex items-center gap-4 text-lg font-bold cursor-pointer">
                    <CircleUser size={28} />
                    <p className="hidden lg:inline hover:underline">Profile</p>
                </div>
            </Link>
        </div>
    )
}