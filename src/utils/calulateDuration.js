

const calculateDuration = (duration) => {
    const matchDuration = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    const hour = matchDuration[1] ? parseInt(matchDuration[1].slice(0, matchDuration[1].length - 1)) : 0;
    const minute = matchDuration[2] ? parseInt(matchDuration[2].slice(0, matchDuration[2].length - 1)) : 0;
    const second = matchDuration[3] ? parseInt(matchDuration[3].slice(0, matchDuration[3].length - 1)) : 0;
    const formattedDuration = ` ${hour ? `${hour < 10 ? `0${hour}` : hour}:` : ''}${minute ? `${minute < 10 ? `0${minute}` : minute}:` : '00:'}${second < 10 ? `0${second}` : second}`;

    return { formattedDuration }
}
export default calculateDuration