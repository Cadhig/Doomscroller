import { story, StoryIcons } from "../data.ts"
import Me from '../assets/Me.jpg'

export default function StoryCarousel() {

    return (
        <div className="flex gap-2 overflow-auto ml-2 mb-2 hideScrollbar lg:mt-4">
            <div>
                <img src={Me} alt="" className="w-16 h-16 rounded-full object-cover cursor-pointer hover:shadow-md" />
                <p className="text-xs text-black/50 truncate w-16 text-center ho">Your story</p>
            </div>
            {story.map((storyData: StoryIcons, index: number) => {
                return <div key={index} className="flex flex-col">
                    <img src={storyData.img} alt={storyData.name} className="w-16 h-16 rounded-full object-cover cursor-pointer hover:shadow-md" />
                    <p className="text-xs hover:text-black/80 cursor-pointer text-black/50 truncate w-16 text-center">{storyData.name}</p>
                </div>
            })}
        </div>
    )
}