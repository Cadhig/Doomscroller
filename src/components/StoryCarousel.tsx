import { story, StoryIcons } from "../data.ts"
import { Link } from "react-router-dom"
import Me from '../assets/Me.jpg'

export default function StoryCarousel() {

    return (
        <div className="flex gap-2 overflow-auto ml-2 mb-2 hideScrollbar lg:mt-4">
            {story.map((storyData: StoryIcons, index: number) => {
                return <div key={index} className="flex flex-col">
                    <Link to={'/story'}><img src={storyData.img} alt={storyData.name} className="w-16 h-16 rounded-full object-cover cursor-pointer hover:shadow-md" /></Link>
                    <Link to={'/profile'}><p className="text-xs hover:text-black/80 cursor-pointer text-black/50 truncate w-16 text-center">{storyData.name}</p></Link>
                </div>
            })}
        </div>
    )
}