import Header from '../components/MobileHeader'
import StoryCarousel from '../components/StoryCarousel'
import Feed from '../components/Feed'
import ActionBar from '../components/ActionBar'
import Notifications from '../components/Notifications'
import FollowSuggestions from '../components/FollowSuggestion'
import { useState } from 'react'

function App() {
  const [notificationModal, setNotificationModal] = useState(false)
  console.log(notificationModal)
  let notificationClass = 'hidden'
  notificationModal ? notificationClass = 'inline' : notificationClass = 'hidden'

  return (
    <div className='lg:flex lg:justify-between lg:flex-row-reverse h-svh'>
      <FollowSuggestions />
      <div className='h-svh lg:w-1/2'>
        <div className='overflow-auto h-full hideScrollbar'>
          <Notifications classes={notificationClass} setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
          <Header setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
          <StoryCarousel />
          <Feed />
        </div>
      </div>
      <ActionBar setNotificationModal={setNotificationModal} notificationModal={notificationModal} />
    </div>
  )
}

export default App
