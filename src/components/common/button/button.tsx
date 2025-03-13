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
        fontSize,
        hoverBig,
        btnBg,
        color,
        hoverBg,
        hoverText,
        bdrs = true,
        ariaLabel,
        onClick
    } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'btn',
                    fontSize && `btn--font-size-${fontSize}`,
                    hoverBig && 'btn--hover-big',
                    btnBg && `btn--bg-${btnBg}`,
                    color && `btn--color-${color}`,
                    hoverBg && `btn--hover-bg-${hoverBg}`,
                    hoverText && `btn--hover-text-${hoverText}`,
                    !bdrs && 'btn--bdrs-unset'
                )
            }
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {title ?? content}
        </div >
    )
}

export { Button }