import PropTypes from "prop-types";
import Comments from "./Comments";
const CommentsList = ({ commentsData }) => {
  return (
    <div>
      {commentsData.map((comment, index) => {
        return (
          <div key={index}>
            <Comments comment={comment} />
            {comment.replies.length > 0 && (
              <div>
                <div className="pl-10 border-l py-1">
                  <CommentsList commentsData={comment.replies} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  commentsData: PropTypes.array.isRequired,
};
