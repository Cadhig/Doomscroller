import Header from "../components/MobileHeader"
import DesktopHeader from "../components/DesktopHeader"
import ActionBar from "../components/ActionBar"
import { explore, Images } from "../data"
export default function Explore() {

    return (
        <div className="flex flex-col gap-4">
            <Header />
            <DesktopHeader />
            <div className="w-full flex items-center justify-center">
                <input type="text" placeholder="explore" className="bg-black/10 w-3/4 border rounded-xl px-1" />
            </div>
            <div className="grid grid-cols-3 w-full gap-1">
                {explore.map((exploreData: Images, index: number) => {
                    return <div key={index}>
                        <img src={exploreData.img} alt="exploreImg" className="w-full h-32 object-cover" />
                    </div>
                })}
            </div>
            <ActionBar />
        </div>
    )
}