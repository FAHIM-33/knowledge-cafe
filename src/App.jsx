import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
function App() {
  let [bookmarks, setBookmarks] = useState([])
  let [readingTime, setReadingTime] = useState(0);
  const handleBookmarks = (blog) => {
    let newArr = [...bookmarks, blog]
    setBookmarks(newArr)
  }
  const handleTime = (time) => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs
          handleBookmarks={handleBookmarks}
          handleTime={handleTime}
          >
        </Blogs>

        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        >
          
        </Bookmarks>
      </div>
    </>
  )
}

export default App
