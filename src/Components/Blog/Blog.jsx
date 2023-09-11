import pt from 'prop-types'
const Blog = ({blog}) => {
    let {title} = blog;
    return (
        <div>
    <h1>{title}</h1>            
        </div>
    );
};
Blog.propTypes = {
    blog: pt.object.isRequired,

}
export default Blog;