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



// Random Name Names
let nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

// function to generate random names
export const generateRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)]
}


// Random text generator
export const generateRandomText = () => {
    let result = ''
    let length = Math.floor((Math.random() * 31) + 10)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLength = characters.length
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charLength))
        counter++;
    }
    return result;
}


// RandomeEMogi Generator
export const generateRandomEmoji = () => {
    const emojis = ['😀', '', '😂', '😊', '😎', '😍', '', '😜', '🤔', '', '😢', '😇', '', '🙄', '😄', '😋', '😉', '', '😘', '🤩', '🤗', '', '🤓', '😏', '😑', '', '😶', ''];
    return emojis[Math.floor(Math.random() * emojis.length)]
}