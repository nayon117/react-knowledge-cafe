import Bookmark from "../../BookMark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="w-1/3">
      <h3 className="text-center text-2xl font-medium border-2 mb-4 rounded-lg">Reading Time: { readingTime} min</h3>
          <h2 className="text-center text-2xl font-medium border-2 rounded-lg">Bookmarked Blogs:{bookmarks.length}</h2>
          {
              bookmarks.map((bookmark,idx) => <Bookmark
                  key={idx}
                  bookmark={bookmark}
              ></Bookmark>)
          }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime:PropTypes.number.isRequired
}
export default Bookmarks;
