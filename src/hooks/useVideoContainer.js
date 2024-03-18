import { useEffect } from "react";
import { YOUTBE_API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addHomePageVideos } from "../utils/slices/videosSlice";
import { useSelector } from "react-redux";

const useVideoContainer = () => {

    const dispatch = useDispatch()
    const homePageVideos = useSelector(store => store.homePageVideos)

    const fetchPopularVideos = async () => {
        const data = await fetch(YOUTBE_API_URL);
        const json = await data.json();
        dispatch(addHomePageVideos(json?.items))
    };
    /* eslint-disable */
    useEffect(() => {
        !homePageVideos && fetchPopularVideos();
    }, []);
    /* eslint-enable */
    return { homePageVideos }
}
export default useVideoContainer;