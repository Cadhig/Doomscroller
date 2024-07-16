import { Accounts, suggestedAccounts } from "../data"
import { Link } from "react-router-dom"

export default function FollowSuggestions() {

    return (
        <div className="w-1/4 p-4 hidden lg:inline">
            <h1 className="text-lg text-black/50">Suggestions for you</h1>
            {suggestedAccounts.map((suggestedAccountData: Accounts, index: number) => {
                return <div key={index} className="flex flex-col py-1">
                    <Link to={'/profile'}><div className="flex gap-2">
                        <img src={suggestedAccountData.img} alt={suggestedAccountData.username} className="w-8 h-8 rounded-full object-cover cursor-pointer hover:shadow-md" />
                        <div className="flex flex-col">
                            <p className="hover:text-black/80 cursor-pointer">{suggestedAccountData.username}</p>
                            <p className="text-xs text-black/50 truncate w-56">Followed by {suggestedAccountData.followedBy}</p>
                        </div>
                    </div> </Link>
                </div>
            })}
        </div>
    )
}