import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("blogs.json")
            const data = await res.json()
            console.log(data);
            setBlogs(data)
        }
        loadData()
    },[])
    return (
        <div className="md:w-2/3">
           
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookMark={handleAddToBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blogs;