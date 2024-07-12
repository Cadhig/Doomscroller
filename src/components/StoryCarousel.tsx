import { story, StoryIcons } from "../data.ts"
import Me from '../assets/Me.jpg'

export default function StoryCarousel() {

    return (
        <div className="flex gap-4 overflow-auto m-4 hideScrollbar">
            <div>
                <img src={Me} alt="" className="w-16 h-16 rounded-full object-cover" />
                <p className="text-xs text-black/70 truncate w-16 text-center">Your story</p>
            </div>
            {story.map((storyData: StoryIcons, index: number) => {
                return <div key={index} className="flex flex-col">
                    <img src={storyData.img} alt={storyData.name} className="w-16 h-16 rounded-full object-cover" />
                    <p className="text-xs truncate w-16 text-center">{storyData.name}</p>
                </div>
            })}
        </div>
    )
}