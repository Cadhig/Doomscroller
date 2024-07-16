import Courtney from './assets/Courtney.jpg'
import Bear from './assets/Bear.jpg'
import EdSheeran from './assets/EdSheeran.jpg'
import Gojo from './assets/Gojo.jpg'
import Lobster from './assets/Lobster.jpg'
import Pewdiepie from './assets/Pewdiepie.jpg'
import InTheWild from './assets/InTheWild.jpg'
import GojoSelfie from './assets/GojoSelfie.jpg'
import Spiritbox from './assets/Spiritbox.jpg'
import PewdiepieFamily from './assets/PewdiepieFamily.jpg'
import LobsteringBoat from './assets/LobsteringBoat.jpg'
import OldWoman from './assets/OldWoman.jpg'
import RandomMan from './assets/RandomMan.jpg'
import TomHolland from './assets/TomHolland.jpg'
import WomenAtBeach from './assets/WomenAtBeach.jpg'
import WomanWithDrink from './assets/WomanWithDrink.jpg'
import BillieElish from './assets/BillieEilish.jpg'
import RickAstley from './assets/RickAstley.jpg'
import Spiderman from './assets/Spiderman.jpg'
import Me from './assets/Me.jpg'
import InTheOcean from './assets/InTheOcean.jpg'
import InTheMolt from './assets/InTheMolt.jpg'
import InTheJungle from './assets/InTheJungle.jpg'
import InTheDesert from './assets/InTheDesert.jpg'
import InTheUnknown from './assets/InTheUnknown.jpg'
import InTheRiver from './assets/InTheRiver.jpg'
import InTheConcreteJungle from './assets/InTheConcreteJungle.jpg'
import InTheForest from './assets/InTheForest.jpg'
import InTheAbyss from './assets/InTheAbyss.jpg'
import InTheMiddleAges from './assets/InTheMiddleAges.jpg'

export interface StoryIcons {
    img: string
    name: string
    plus?: string
}

export const story: StoryIcons[] = [
    {
        img: Me,
        name: 'Your story'
    },
    {
        img: Courtney,
        name: 'courtneylaplante'
    },
    {
        img: Bear,
        name: 'bb_art'
    },
    {
        img: Gojo,
        name: 'gojosatoru'
    },
    {
        img: EdSheeran,
        name: 'teddysphotos'
    },
    {
        img: Lobster,
        name: 'atlantic.fishery'
    },
    {
        img: Pewdiepie,
        name: 'pewdiepie'
    }
]

export interface Post {
    profileImg: string,
    username: string,
    location?: string,
    image: string,
    likes: number,
    description?: string,
    time: string
}

export const feed: Post[] = [
    {
        profileImg: Bear,
        username: 'bb_art',
        location: 'The Museum of Fine Arts',
        image: InTheWild,
        likes: 542,
        description: "Thank you so much to The Musesum of Fine Arts for hosting my piece 'In the Wild'!",
        time: '4 minutes ago'
    },
    {
        profileImg: Gojo,
        username: 'gojosatoru',
        location: 'Shibuya, Tokyo',
        image: GojoSelfie,
        likes: 62,
        description: "渋谷駅に火山の頭を持つ奇妙で怒った男がいます...私は彼に会いに行きます、私の生徒のほとんどは死なないと確信しています #東京 #悪魔 ",
        time: '1 day ago'
    },
    {
        profileImg: Courtney,
        username: 'courtneylaplante',
        location: "Chicago, Illinois",
        image: Spiritbox,
        description: "I loved the crowd in Chicago tonight! Ya'll are the best!",
        likes: 972,
        time: '1 day ago'
    },
    {
        profileImg: Pewdiepie,
        username: 'pewdiepie',
        image: PewdiepieFamily,
        likes: 994,
        description: "Welcome to the family Björn",
        time: '3 days ago'
    },
    {
        profileImg: Lobster,
        username: 'atlantic.fishery',
        location: 'Maine',
        image: LobsteringBoat,
        likes: 11,
        description: "It's lobster season!",
        time: '4 days ago'
    },
    {
        profileImg: TomHolland,
        username: 'tomholland',
        image: Spiderman,
        description: "I cant believe i get to play spiderman!",
        likes: 935,
        time: '5 days ago'
    },
    {
        profileImg: WomanWithDrink,
        username: 'sierra_bush',
        location: 'Miami, Florida',
        image: WomenAtBeach,
        likes: 235,
        time: '4 days ago'
    },

]

export interface Accounts {
    img: string,
    username: string,
    followedBy?: string
}

export const suggestedAccounts: Accounts[] = [
    {
        img: TomHolland,
        username: "tomholland",
        followedBy: "sierra_bush, gojosatoru"
    },
    {
        img: RandomMan,
        username: "jason.ohare",
        followedBy: "courtneylaplante"
    },
    {
        img: OldWoman,
        username: "grandma_gertrude",
        followedBy: "bb_art, sierra_bush"
    },
    {
        img: BillieElish,
        username: "billieeilish",
        followedBy: "courtneylaplante, atlantic.fishery, pewdiepie"
    },
    {
        img: RickAstley,
        username: "officialrickastley",
        followedBy: "gojosatoru"
    }
]

export interface ProfileType {
    profileImg: string,
    username: string,
    bio: string,
    pronouns?: string
    posts: number,
    followers: number,
    following: number,
    name: string,
}

export const profile: ProfileType[] = [
    {
        profileImg: Bear,
        username: 'bb_art',
        bio: "Hey! I'm Jason, an artist based out of Houston, Texas. I take pride in my work!",
        pronouns: 'he/him',
        posts: 11,
        followers: 426,
        following: 43,
        name: "Jason Bottler"
    }
]

export interface ProfileImages {
    img: string
}

export const profileImgs: ProfileImages[] = [
    {
        img: InTheWild
    },
    {
        img: InTheDesert
    },
    {
        img: InTheOcean
    },
    {
        img: InTheJungle
    },
    {
        img: InTheMolt
    },
    {
        img: InTheRiver
    },
    {
        img: InTheUnknown
    },
    {
        img: InTheAbyss
    },
    {
        img: InTheConcreteJungle
    },
    {
        img: InTheForest
    },
    {
        img: InTheMiddleAges
    }
]

export interface Messages {
    img: string,
    username: string,
    message: string,
}

export const messages: Messages[] = [
    {
        img: Bear,
        username: 'bb_art',
        message: 'Thanks!'
    },
    {
        img: BillieElish,
        username: 'billieeilish',
        message: 'Hi Billie, i just wanted to say that i am a huge fan, i know you wont see this but i appreciate your music!'
    },
    {
        img: WomanWithDrink,
        username: 'sierra_bush',
        message: 'girl i know... I cant believe he said that to you'
    },
    {
        img: Gojo,
        username: 'gojosatoru',
        message: '今夜パーティーに来ますか？'
    }
]

export const messageRequests: Messages[] = [
    {
        img: RandomMan,
        username: 'jason.ohare',
        message: 'Are you looking for a photographer?'
    }
]