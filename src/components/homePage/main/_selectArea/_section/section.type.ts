export interface sectionProps {
    title?: string
    contentList?: {
        album?: string;
        artists?: string;
        subtitle?: string
        img: string;
    }[]
    isImgCircle?: boolean
    shuffled?: boolean,
    sectionOnClick?: () => void,
    link?: boolean
    bigSize?: boolean
    slice?: boolean
}