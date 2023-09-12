import pt from 'prop-types'
const Bookmark = ({bookmark}) => {
    return (
        <div className="text-lg font-semibold p-5">
            <p>{bookmark.title}</p>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: pt.object.isRequired,
}
export default Bookmark;