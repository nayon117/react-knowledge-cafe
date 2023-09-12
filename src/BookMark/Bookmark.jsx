 import PropTypes from 'prop-types'
const Bookmark = ({ bookmark }) => {
    const {title} = bookmark
    return (
        <div className="border-2 p-2 m-2 rounded-lg">
            <h2 className="text-center text-xl my-2">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;