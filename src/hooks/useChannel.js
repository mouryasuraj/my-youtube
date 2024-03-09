
import { useEffect, useState } from "react"

const useChannel = (channelId) => {
    const [profilePic, setProfilePic] = useState(null)
    const fetchChannelDetails = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=` + import.meta.env.VITE_YOUTUBE_KEY)
        const json = await data.json()
        const { snippet } = json.items[0]
        const { thumbnails } = snippet
        setProfilePic(thumbnails)
    }
    /*eslint-disable */
    useEffect(() => {
        fetchChannelDetails()
    }, [])
    /*eslint-enable */

    return profilePic
}

export default useChannel