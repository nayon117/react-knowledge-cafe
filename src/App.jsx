
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  
  const handleAddToBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog]
    setBookmarks(newBookMark);
  }
  const handleMarkAsRead = (id,time) => {
    setReadingTime(readingTime + time)
     
    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMark)
  }

  return (
    <>
      {/* header  */}
      <div className='container mx-auto px-4 md:px-8 lg:px-16 py-2'>
      <Header/>
      </div>

      {/* main part  */}

      <div className='container mx-auto px-4 md:px-8 lg:px-16 py-4 my-10'>
        
        <div className='flex flex-col md:flex-row gap-5'>
          <Blogs handleAddToBookMark={handleAddToBookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
          <Bookmarks bookmarks={bookmarks } readingTime={readingTime} />
        </div>

     </div>
       
    </>
  )
}

export default App
