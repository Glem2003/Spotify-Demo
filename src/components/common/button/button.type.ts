type color = 'white' | 'gray' | 'black'

export interface ButtonProps {
    title?: string
    content?: React.ReactNode
    className?: string
    hoverBig?: boolean
    btnBg?: color
    hoverBg?: color
}