import { useEffect } from "react";
import { YOUTBE_API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addHomePageVideos } from "../utils/slices/videosSlice";

const useVideoContainer = () => {

    const dispatch = useDispatch()

    const fetchPopularVideos = async () => {
        const data = await fetch(YOUTBE_API_URL);
        const json = await data.json();
        dispatch(addHomePageVideos(json.items))
    };
    /* eslint-disable */
    useEffect(() => {
        fetchPopularVideos();
    }, []);
    /* eslint-enable */
    return {}
}
export default useVideoContainer;