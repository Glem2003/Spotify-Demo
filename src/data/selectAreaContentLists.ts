// data
import { trendArtistList } from "./trendArtistList"
import { popArtistList } from "./popArtistList"
import { popAlbumList } from "./popAlbum"
import { popRadioList } from "./popRadio"
import { featuredCharts } from "./featuredCharts"
import { recommendAlbumsList } from "./recommendAlbums"

export const selectAreaContentLists = [
    {
        title: "trending songs",
        contentLists: trendArtistList
    },
    {
        title: "popular artists",
        contentLists: popArtistList,
        config: { isImgCircle: true }
    },
    {
        title: "popular albums and singles",
        contentLists: popAlbumList,
    },
    {
        title: "popular radio",
        contentLists: popRadioList,
    },
    {
        title: "featured Charts",
        contentLists: featuredCharts,
        config: { shuffled: false }
    },
    {
        title: "state of music today",
        contentLists: recommendAlbumsList,
    }
]