import clsx from 'clsx'

// style
import './button.sass'

// type
import { ButtonProps } from './button.type'

const Button: React.FC<ButtonProps> = (props) => {

    const {
        title,
        content,
        className,
        hoverBig,
        btnBg,
        hoverBg
    } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'btn',
                    hoverBig && 'btn--hover-big',
                    btnBg && `btn--bg-${btnBg}`,
                    hoverBg && `btn--hover-bg-${hoverBg}`
                )
            }
        >
            {title ?? content}
        </div >
    )
}

export { Button }