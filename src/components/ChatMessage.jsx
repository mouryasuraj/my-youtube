import PropTypes from "prop-types";
const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex gap-2 items-start w-full">
      <div>
        <i className="fa-solid fa-user bg-gray-300 px-1 py-1 rounded-full" />
      </div>
      <div className="w-full">
        <span className="font-bold md:text-[15px] text-sm">{name}</span>
        <span className="ml-2 text-gray-600 md:text-[15px] text-sm">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

ChatMessage.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
