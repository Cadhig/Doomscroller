import Courtney from './assets/Courtney.jpg'
import Bear from './assets/Bear.jpg'
import EdSheeran from './assets/EdSheeran.jpg'
import Gojo from './assets/Gojo.jpg'
import Lobster from './assets/Lobster.jpg'
import Pewdiepie from './assets/Pewdiepie.jpg'

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