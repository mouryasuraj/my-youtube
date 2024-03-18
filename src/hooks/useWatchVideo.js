import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/slices/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const useWatchVideo = () => {
    const [channelInfo, setChannelInfo] = useState(null);
    const [searchParams] = useSearchParams();
    const { channelId } = useParams();
    const url = searchParams.get("v");
    const dispatch = useDispatch();
    const fetchChannel = async () => {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${import.meta.env.VITE_YOUTUBE_KEY
            }`
        );
        const json = await data.json();
        setChannelInfo(json.items[0]);
    };

    /* eslint-disable */
    useEffect(() => {
        dispatch(closeMenu());
        !channelInfo && fetchChannel();
        return () => dispatch(toggleMenu(true));
    }, []);
    /* eslint-enable */

    return { channelInfo, url }
}

export default useWatchVideo;