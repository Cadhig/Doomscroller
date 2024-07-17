import Bear from '../assets/Bear.jpg'
import { Link } from 'react-router-dom'
import FollowSuggestions from '../components/FollowSuggestion'
import ActionBar from '../components/ActionBar'
import Notifications from '../components/Notifications'
import { useState } from 'react'

export default function Story() {
    const [notificationModal, setNotificationModal] = useState(false)
    console.log(notificationModal)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'

    return (
        <div className='lg:flex lg:flex-row-reverse'>
            <FollowSuggestions />
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <div className='p-4 storyImage h-svh flex flex-col justify-between lg:w-1/2'>
                <Link to={'/profile'} className='flex items-center gap-2 text-white'>
                    <img src={Bear} alt="bb_art" className='size-12 border rounded-full' />
                    <p>bb_art</p>
                </Link>
                <Link to={'/messages'} className='text-white bg-black/50 text-center rounded'>
                    <button>Message</button>
                </Link>
            </div>
            <div className='hidden lg:inline lg:static lg:w-1/4 lg:h-full '>
                <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            </div>
        </div>
    )
}