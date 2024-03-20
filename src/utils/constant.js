
// YOUTUBE API
export const YOUTBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=' + import.meta.env.VITE_YOUTUBE_KEY


// SEARCH API
export const YOUTUBE_SEARCH_VIDOES_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=namastejavascript&maxResults=25&key=" + import.meta.env.VITE_YOUTUBE_KEY


export const YOUTUBE_SUGGESTION_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='


// Dummy Comments data
export const commentsData = [
    {
        name: "@surajmourya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [
            {
                name: "@surajmourya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [
                    {
                        name: "@surajmourya45",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                        replies: [
                            {
                                name: "@surajmourya45",
                                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
            {
                name: "@surajmourya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [],
            },
        ],
    },
    {
        name: "@surajmourya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [],
    },
    {
        name: "@surajmourya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [
            {
                name: "@surajmourya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [],
            },
        ],
    },
    {
        name: "@surajmourya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [
            {
                name: "@surajmourya45",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                replies: [
                    {
                        name: "@surajmourya45",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                        replies: [
                            {
                                name: "@surajmourya45",
                                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "@surajmourya45",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit dicta dolorum mollitia illum iusto velit nam ducimus consectetur exercitationem. Quo nam animi aut ex sapiente temporibus, magnam consectetur voluptate!",
        replies: [],
    },
];


// Live Chat Count
export const OFFSET_LIVE_CHAT = 50