import { feed, Post } from "../data"
import { Heart, MessageCircle, Forward } from "lucide-react"
import { Link } from "react-router-dom"
export default function Feed() {

    return (
        <div className="h-3/4">
            {feed.map((feedData: Post, index: number) => {
                return <div key={index} className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center mx-2">
                        <Link to={'/profile'}><img src={feedData.profileImg} alt={feedData.username} className="w-8 h-8 rounded-full object-cover cursor-pointer" /></Link>
                        <div className="text-sm w-full">
                            <Link to={'/profile'}><p className="font-bold cursor-pointer hover:text-black/80">{feedData.username}</p></Link>
                            <Link to={'/location'}><p className="text-black/70 hover:underline cursor-pointer text-xs">{feedData.location}</p></Link>
                        </div>
                    </div>
                    <img src={feedData.image} alt="post image" />
                    <div className="flex gap-4 mx-2 cursor-pointer">
                        <Heart />
                        <MessageCircle />
                        <Forward />
                    </div>
                    <div className="mx-2 mb-4 ">
                        <p className="font-bold text-sm cursor-pointer hover:underline">{feedData.likes} likes</p>
                        <div className="inline">
                            <Link to={'/profile'}><p className="font-bold w-20 inline hover:text-black/80 cursor-pointer">{feedData.username}</p></Link>
                            <p className="ml-1 inline">{feedData.description}</p>
                        </div>
                        <p className="text-xs text-black/50">{feedData.time}</p>
                    </div>
                </div>
            })
            }
        </div>

    )
}