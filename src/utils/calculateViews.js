const calculateViews = (viewCount) => {
    if (viewCount < 1000) {
        return viewCount.toString();
    } else if (viewCount < 1000000) {
        return (viewCount / 1000).toFixed(0) + 'K'
    } else if (viewCount < 1000000000) {
        return (viewCount / 1000000).toFixed(1) + 'M'
    } else {
        return (viewCount / 1000000000).toFixed(1) + 'B'
    }
}

export default calculateViews