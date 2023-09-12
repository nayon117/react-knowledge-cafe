
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  
  const handleAddToBookMark = (blog) => {
    console.log(blog);
    const newBookMark = [...bookmarks, blog]
    setBookmarks(newBookMark);
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
        <Blogs handleAddToBookMark={handleAddToBookMark} />
          <Bookmarks bookmarks={bookmarks } />
        </div>

     </div>
       
    </>
  )
}

export default App
