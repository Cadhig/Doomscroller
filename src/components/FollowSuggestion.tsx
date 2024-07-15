import { Accounts, suggestedAccounts } from "../data"

export default function FollowSuggestions(props: Accounts) {

    return (
        <div className="w-1/4 p-4 hidden lg:inline">
            <h1 className="text-lg text-black/50">Suggestions for you</h1>
            {suggestedAccounts.map((suggestedAccountData, index: number) => {
                return <div key={index} className="flex flex-col py-1">
                    <div className="flex gap-2">
                        <img src={suggestedAccountData.img} alt={suggestedAccountData.username} className="w-8 h-8 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <p>{suggestedAccountData.username}</p>
                            <p className="text-xs text-black/50 truncate w-56">Followed by {suggestedAccountData.followedBy}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}