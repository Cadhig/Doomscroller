import Header from './components/MobileHeader'
import StoryCarousel from './components/StoryCarousel'
import Feed from './components/Feed'
import ActionBar from './components/ActionBar'
import FollowSuggestions from './components/FollowSuggestion'
function App() {

  return (
    <div className='lg:flex lg:justify-between lg:flex-row-reverse h-svh'>
      <FollowSuggestions />
      <div className='h-svh lg:w-1/2 xl:w-1/4'>
        <div className='overflow-auto h-full hideScrollbar'>
          <Header />
          <StoryCarousel />
          <Feed />
        </div>
      </div>
      <ActionBar />
    </div>
  )
}

export default App
