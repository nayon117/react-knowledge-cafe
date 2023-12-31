import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark,handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    id
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center my-4">
        <div className="flex gap-4 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2 className="text-xl font-semibold">{author}</h2>
            <h2>{posted_date}</h2>
          </div>
        </div>
        <div className="whitespace-nowrap">
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddToBookMark(blog)} className="ml-2 text-2xl">
            {" "}
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold my-6">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(id,reading_time)} className="text-purple-800 font-bold underline">Mark as Read</button>
      <hr className="my-8 bg-black font-bold" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func.isRequired
};

export default Blog;

