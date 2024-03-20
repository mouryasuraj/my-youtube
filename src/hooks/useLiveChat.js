import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClearMessages, addMessages } from "../utils/slices/chatSlice";
import {
    generateRandomEmoji,
    generateRandomName,
    generateRandomText,
} from "../utils/helper";

const useLiveChat = (inputValue) => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (inputValue.current.value) {
            dispatch(
                addMessages({
                    name: "Suraj Mourya",
                    text: inputValue.current.value,
                })
            );
            e.target.reset();
        }
    };

    /*eslint-disable */
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessages({
                    name: generateRandomName(),
                    text: generateRandomText() + generateRandomEmoji(),
                })
            );
        }, 500);
        return () => {
            clearInterval(i);
            dispatch(addClearMessages());
        };
    }, []);
    /*eslint-enable */

    return { chatMessages, handleChatSubmit }
}
export default useLiveChat;