import PropTypes from "prop-types";

const Comments = ({ comment }) => {
  const { name, text, replies } = comment;
  return (
    <>
      <div className="my-2 flex gap-4 md:pr-10">
        <i className="fa-solid fa-user text-2xl bg-gray-300 px-[9px] py-1 rounded-full h-fit" />
        <div>
          <p className="font-semibold mb-1 hover:text-gray-600 cursor-pointer w-fit">
            {name}
          </p>
          <p>{text}</p>
          <div className="flex items-cente gap-4 py-2">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-thumbs-up text-lg cursor-pointer" />
              <p>1k</p>
            </div>
            <div>
              <i className="fa-regular fa-thumbs-down text-lg cursor-pointer" />
            </div>
            {replies.length > 0 && <p className="font-semibold">Replies:</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

Comments.propType = {
  comment: PropTypes.object.isRequired,
};
