export type color = 'white' | 'black'

export interface ButtonProps {
    title?: string
    content?: React.ReactNode
    className?: string
    hoverBig?: boolean
    btnBg?: color
    hoverBg?: color
    hoverText?: color
    bdrs?: boolean
    ariaLabel?: string
}