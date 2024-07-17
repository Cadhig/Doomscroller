import Header from '../components/MobileHeader'
import StoryCarousel from '../components/StoryCarousel'
import Feed from '../components/Feed'
import ActionBar from '../components/ActionBar'
import Notifications from '../components/Notifications'
import FollowSuggestions from '../components/FollowSuggestion'
import { useState } from 'react'

function App() {
  const [notification, setNotification] = useState(false)
  console.log(notification)
  let notificationClass = 'hidden'
  notification ? notificationClass = 'inline' : notificationClass = 'hidden'

  return (
    <div className='lg:flex lg:justify-between lg:flex-row-reverse h-svh'>
      <FollowSuggestions />
      <div className='h-svh lg:w-1/2'>
        <div className='overflow-auto h-full hideScrollbar'>
          <Notifications classes={notificationClass} setNotification={setNotification} notification={notification} />
          <Header setNotification={setNotification} notification={notification} />
          <StoryCarousel />
          <Feed />
        </div>
      </div>
      <ActionBar setNotification={setNotification} notification={notification} />
    </div>
  )
}

export default App
