import { House, Search, SquarePlus, Clapperboard, CircleUser } from "lucide-react"
export default function BottomBar() {

    return (
        <div className="flex items-center justify-around h-14 fixed bottom-0 bg-white w-full">
            <House size={28} />
            <Search size={28 }/>
            <SquarePlus size={28} />
            <Clapperboard size={28} />
            <CircleUser size={28} />
        </div>
    )
}