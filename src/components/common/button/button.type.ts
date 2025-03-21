export type color = 'white' | 'black' | 'gray'
export type cursor = 'default' | 'pointer'

export interface ButtonProps {
    title?: string
    content?: React.ReactNode
    className?: string,
    fontSize?: number
    hoverBig?: boolean
    btnBg?: color
    color?: color
    hoverBg?: color
    hoverText?: color
    bdrs?: boolean
    ariaLabel?: string
    cursor?: cursor
    onClick?: () => void
}