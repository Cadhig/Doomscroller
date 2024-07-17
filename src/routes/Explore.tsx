import Header from "../components/MobileHeader"
import DesktopHeader from "../components/DesktopHeader"
import ActionBar from "../components/ActionBar"
import { explore, Images } from "../data"
import FollowSuggestions from "../components/FollowSuggestion"
export default function Explore() {

    return (
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between h-svh hideScrollbar">
            <FollowSuggestions />
            <Header />
            <div className=" flex flex-col gap-4 m-4 lg:w-1/2 overflow-auto hideScrollbar">
                <div className="flex justify-center">
                    <input type="text" placeholder="explore" className="bg-black/10 w-3/4 border rounded-xl px-1" />
                </div>
                <div className="grid grid-cols-3 w-full gap-1">
                    {explore.map((exploreData: Images, index: number) => {
                        return <div key={index}>
                            <img src={exploreData.img} alt="exploreImg" className="w-full h-full object-cover" />
                        </div>
                    })}
                </div>
            </div>
            <ActionBar />
        </div>
    )
}