import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
            <h1>Blogs:{blogs.length }</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;