import { Heart, MessageCircleMore } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div className="flex justify-between items-center m-4 lg:hidden">
            <Link to={'/'}>
                <p className="instagram">DoomScroller</p>
            </Link>
            <div className="flex gap-4 cursor-pointer">
                <Heart className="active:text-black/60" />
                <Link to={'/messages'}>
                    <MessageCircleMore className="active:text-black/60" />
                </Link>
            </div>
        </div>
    )
}