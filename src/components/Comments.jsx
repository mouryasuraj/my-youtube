import PropTypes from "prop-types";

const Comments = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="my-2 flex gap-4 md:pr-10">
      <i className="fa-solid fa-user text-2xl bg-gray-300 px-[9px] py-1 rounded-full h-fit" />
      <div>
        <p className="font-semibold mb-1">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;

Comments.propType = {
  comment: PropTypes.object.isRequired,
};
