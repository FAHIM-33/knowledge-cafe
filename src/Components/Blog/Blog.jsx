import pt from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmarks ,handleTime}) => {
    console.log(handleTime);
    let { title, cover, author, author_img, posted_date, reading_time, hash_tags } = blog;
    return (
        <div className='mb-20'>

            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center my-9'>
                <div className='flex gap-6'>
                    <figure className='w-14'>
                        <img src={author_img} alt="" />
                    </figure>
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='font-semibold text-gray-500'>Posted: {posted_date}</p>
                    </div>
                </div>
                <div className='font-medium text-xl text-gray-500 flex gap-2'>
                    <p>{reading_time} mins read</p>
                    <button className='text-red-400' onClick={()=>handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='font-medium text-xl text-gray-500 mt-4 mb-5'>
                {hash_tags.map((str, i) => <a key={i}>#{str} </a>)}
            </p>
            <button
            onClick={()=>handleTime(reading_time)}
            className='underline text-xl font-semibold text-[#6047EC]'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: pt.object.isRequired,
    handleBookmarks: pt.func,
    handleTime: pt.func

}
export default Blog;