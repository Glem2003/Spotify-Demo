import { ReactNode } from 'react'

export interface RowProps {
    className?: string;
    children?: ReactNode;
    verticalCenter?: boolean
}

export interface ColProps {
    className?: string;
    children?: ReactNode;
    horizonRight?: boolean
    verticalCenter?: boolean
    onClick?: () => void
}