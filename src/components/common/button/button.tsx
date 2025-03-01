import clsx from 'clsx'

// style
import './button.sass'

// type
import { ButtonProps } from './button.type'

const Button: React.FC<ButtonProps> = (props) => {

    const { title, className, bgWhite, hoverBig } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'button button--hover-big',
                    { 'button--bg-white': bgWhite },
                    { 'button--hover-big': hoverBig }
                )
            }
        >
            {title}
        </div>
    )
}

export default Button