import CommentsList from "./CommentsList";
import { commentsData } from "../utils/constant";

const CommentsContainer = () => {
  return (
    <div className="my-4 px-4 md:bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold py-3">Comments</h2>
      <div>
        <CommentsList commentsData={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
