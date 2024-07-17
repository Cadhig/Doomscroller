import { useState } from 'react'
import { Images, profileImgs } from '../data.ts'
import CameraPlaceholder from '../assets/CameraPlaceholder.jpg'
import { Link } from 'react-router-dom'
import { ChevronLeft, Camera } from 'lucide-react'

export default function Create() {
    const [currentImg, setCurrentImg] = useState<string>(CameraPlaceholder)

    return (
        <div className='h-svh'>
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
            <div className='grid grid-cols-3 overflow-auto h-1/2'>
                {profileImgs.map((img: Images, index: number) => {
                    return <div key={index} onClick={() => setCurrentImg(profileImgs[index].img)}>
                        <img src={img.img} alt="recent images" className='size-32 object-cover' />
                    </div>
                })}
            </div>
        </div>
    )
}