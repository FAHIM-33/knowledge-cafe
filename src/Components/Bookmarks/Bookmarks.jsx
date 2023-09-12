import pt from 'prop-types'
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 pl-2">
            <h2 className="mb-6 text-2xl font-bold border-2 border-neutral-500 text-neutral-600 rounded-lg px-12 py-5">Spent time on read: {readingTime} mins</h2>
            <div className='p-7'>
                <h3 className='mb-4 font-bold text-2xl'>Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark,i) => <Bookmark 
                    key={i}
                    bookmark={bookmark}
                    ></Bookmark>)
                }
                
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: pt.array.isRequired,
    readingTime: pt.number,
}
export default Bookmarks;