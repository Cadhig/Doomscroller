import { useState } from 'react'
import { Images, profileImgs } from '../data.ts'
import CameraPlaceholder from '../assets/CameraPlaceholder.jpg'
import { Link } from 'react-router-dom'
import { ChevronLeft, Camera } from 'lucide-react'
import FollowSuggestions from '../components/FollowSuggestion'
import ActionBar from '../components/ActionBar'
import Notifications from '../components/Notifications'

export default function Create() {
    const [currentImg, setCurrentImg] = useState<string>(CameraPlaceholder)
    const [notificationModal, setNotificationModal] = useState(false)
    console.log(notificationModal)
    let notificationClass = 'hidden'
    notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'

    return (
        <div className='flex flex-col lg:flex-row-reverse lg:justify-between h-svh hideScrollbar'>
            <FollowSuggestions />
            <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            <div className='h-svh lg:w-1/2'>
                <div className='flex mx-2 justify-between'>
                    <Link to={'/'} className='w-1/3'>
                        <ChevronLeft />
                    </Link>
                    <p className='w-1/3 text-center'>New post</p>
                    <Link to={'/profile'} className='w-1/3 text-blue-600'>
                        <p className='text-end'>Next</p>
                    </Link>
                </div>
                <div className='h-1/2 flex'>
                    <img src={currentImg} alt='currently displayed image' className='w-full object-cover' />
                </div>
                <div className='mx-2 flex justify-between'>
                    <p>Recents</p>
                    <Camera onClick={() => setCurrentImg(CameraPlaceholder)} />
                </div>
                <div className='grid grid-cols-3 overflow-auto h-1/2 hideScrollbar'>
                    {profileImgs.map((img: Images, index: number) => {
                        return <div key={index} onClick={() => setCurrentImg(profileImgs[index].img)}>
                            <img src={img.img} alt="recent images" className=' object-cover size-full' />
                        </div>
                    })}
                </div>
            </div>
            <div className='hidden lg:inline lg:static lg:w-1/4 lg:h-full '>
                <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
            </div>
        </div>
    )
}