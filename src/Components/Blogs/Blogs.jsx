import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookMark}) => {
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
            <h1 className="text-2xl font-medium">Blogs:{blogs.length }</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookMark={handleAddToBookMark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark:PropTypes.func.isRequired
}
export default Blogs;