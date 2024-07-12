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

export interface StoryIcons {
    img: string
    name: string
    plus?: string
}

export const story: StoryIcons[] = [
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
        image: Spiritbox,
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

]

