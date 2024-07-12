import { Heart, MessageCircleMore } from "lucide-react"

export default function Header() {

    return (
        <div className="flex justify-between items-center m-4">
            <p className="instagram">Instagram</p>
            <div className="flex gap-4 cursor-pointer">
                <Heart className="active:text-black/60" />
                <MessageCircleMore className="active:text-black/60" />
            </div>
        </div>
    )
}