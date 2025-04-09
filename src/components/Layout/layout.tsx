import React from 'react'
import clsx from 'clsx'

// style
import './layout.sass'

// type
import { RowProps, ColProps } from './layout.type'


export const Row: React.FC<RowProps> = (props) => {


    const {
        children,
        className,
        verticalCenter
    } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'row',
                    verticalCenter && 'row--vertical-center'
                )
            }
        >
            {children}
        </div>
    )
}

export const Col: React.FC<ColProps> = (props) => {

    const {
        children,
        className,
        horizonRight,
        verticalCenter,
        onClick
    } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'col',
                    horizonRight && 'col--horizon-right',
                    verticalCenter && 'col--vertical-center'
                )
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}
