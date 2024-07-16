import { Link } from "react-router-dom"


export default function DesktopHeader() {

    return (
        <div className="hidden lg:inline">
            <Link to={'/'}>
                <h1 className="instagram hidden lg:inline lg:text-2xl">
                    DoomScroller
                </h1>
            </Link>
        </div>
    )
}