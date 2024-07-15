import { feed, Post } from "../data"
import { Heart, MessageCircle, Forward } from "lucide-react"
export default function Feed() {

    return (
        <div className="h-3/4">
            {feed.map((feedData: Post, index: number) => {
                return <div key={index} className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center mx-2">
                        <img src={feedData.profileImg} alt={feedData.username} className="w-8 h-8 rounded-full object-cover cursor-pointer" />
                        <div className="text-sm w-full">
                            <p className="font-bold cursor-pointer hover:text-black/80">{feedData.username}</p>
                            <p className="text-black/70 hover:underline cursor-pointer text-xs">{feedData.location}</p>
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
                            <p className="font-bold w-20 inline hover:text-black/80 cursor-pointer">{feedData.username}</p>
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