import Bookmark from "../../BookMark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3">
          <h2 className="text-center text-2xl font-medium">Bookmarked Blogs:{bookmarks.length}</h2>
          {
              bookmarks.map(bookmark => <Bookmark
                  key={bookmark.id}
                  bookmark={bookmark}
              ></Bookmark>)
          }
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired
}
export default Bookmarks;
