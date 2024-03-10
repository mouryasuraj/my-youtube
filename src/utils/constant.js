// Menu bar sections

export const section1 = [
    {
        name: 'Home',
        icon: 'home'
    },
    {
        name: 'shorts',
        icon: 'bolt'
    },
    {
        name: 'Subscriptions',
        icon: 'dollar-sign'
    }
]

export const section2 = [
    {
        name: 'Your Channel',
        icon: 'circle-user'
    },
    {
        name: 'History',
        icon: 'clock-rotate-left'
    },
    {
        name: 'Your Videos',
        icon: 'video'
    },
    {
        name: 'Watch Later',
        icon: 'clock'
    },
    {
        name: 'Your Clips',
        icon: 'scissors'
    }
]
export const section3 = [
    {
        name: 'Trending',
        icon: 'fire'
    },
    {
        name: 'Shopping',
        icon: 'bag-shopping'
    },
    {
        name: 'Music',
        icon: 'music'
    },
    {
        name: 'Films',
        icon: 'film'
    },
    {
        name: 'Live',
        icon: 'dna'
    },
    {
        name: 'Gaming',
        icon: 'gamepad'
    },
    {
        name: 'News',
        icon: 'newspaper'
    },
    {
        name: 'Sports',
        icon: 'trophy'
    },
    {
        name: 'Learning',
        icon: 'lightbulb'
    },
    {
        name: 'Fashion & Beauty',
        icon: 'vest-patches'
    },
    {
        name: 'Podcasts',
        icon: 'radio'
    },
]

// Filter BUtton List
export const filterBtnList = [
    'All',
    'News',
    'Computer Programming',
    'Music',
    'Mixes',
    'Live',
    'Film Criticisms',
    'Civil Services Exam',
    'Podcats',
    'Body-Building',
    'Thrillers',
    'History',
    'Trailers',
    'Dramedy',
    'Public Speaking Event',
    'Comedy',
    'Indian Music'
]

// YOUTUBE API
export const YOUTBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=' + import.meta.env.VITE_YOUTUBE_KEY


// SEARCH API
export const YOUTUBE_SEARCH_VIDOES_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=namastejavascript&maxResults=25&key=" + import.meta.env.VITE_YOUTUBE_KEY


export const YOUTUBE_SUGGESTION_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

