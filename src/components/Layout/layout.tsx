import React from 'react'
import clsx from 'clsx'

// style
import './layout.sass'

// type
import { RowProps, ColProps } from './layout.type'


export const Row: React.FC<RowProps> = (props) => {


    const { children, className, verticalCenter } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'row',
                    { 'row--vertical-center': verticalCenter }
                )
            }
        >
            {children}
        </div>
    )
}

export const Col: React.FC<ColProps> = (props) => {

    const { children, className, horizonRight } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'col',
                    { 'col--horizon-right': horizonRight }
                )
            }
        >
            {children}
        </div>
    )
}
