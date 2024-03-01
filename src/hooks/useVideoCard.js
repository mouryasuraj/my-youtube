import calculateDate from "../utils/calculateDate";
import calculateViews from "../utils/calculateViews";
import calculateDuration from "../utils/calulateDuration";

const useVideoCard = (video) => {
    const { snippet, statistics, id, contentDetails } = video;
    const { title, thumbnails, channelTitle } = snippet;
    const thumbnailUrl = thumbnails.maxres.url
    const formattedViews = calculateViews(statistics?.viewCount);
    const formattedDate = calculateDate(snippet?.publishedAt);
    const {formattedDuration} = calculateDuration(contentDetails.duration)


    return { title, thumbnailUrl, channelTitle, id, formattedDate, formattedViews, formattedDuration }
}
export default useVideoCard;