import { useEffect } from "react";
import { useState } from "react";
import pt from 'prop-types'
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3 pr-4">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog} handleBookmarks={handleBookmarks}
                    handleTime={handleTime}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: pt.func.isRequired,
    handleTime: pt.func,
}
export default Blogs;