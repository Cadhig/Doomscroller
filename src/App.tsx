import Header from './components/Header'
import StoryCarousel from './components/StoryCarousel'
import Feed from './components/Feed'
import BottomBar from './components/BottomBar'
function App() {

  return (
    <div className='h-svh'>
      <Header />
      <StoryCarousel />
      <Feed />
      <BottomBar />
    </div>
  )
}

export default App
