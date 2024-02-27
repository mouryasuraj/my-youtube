import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";

const useHeader = () => {

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleIsMenuOpen = () =>{
        dispatch(toggleMenu())
    }

    return { handleSearch, handleIsMenuOpen }
}
export default useHeader