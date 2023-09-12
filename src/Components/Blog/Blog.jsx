import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
 

const Blog = ({ blog }) => {
     const {title,cover,reading_time,author,author_img,posted_date, hashtags} = blog
    return (
        <div className='mb-20' >
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className='text-xl font-semibold'>{author }</h2>
                        <h2>{posted_date}</h2>
                    </div>
                </div>
                <div className='whitespace-nowrap'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2'> <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold my-6'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash} </a></span>)
                }
            </p>
            <hr className='my-8 bg-black font-bold' />
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;