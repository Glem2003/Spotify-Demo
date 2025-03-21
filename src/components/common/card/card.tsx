import clsx from 'clsx'

// style
import './card.sass'

// type
import { cardProps } from './card.type'

const Card: React.FC<cardProps> = (props) => {

    const { className, children, onMouseEnter, onMouseLeave } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'card'
                )
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    )
}

export default Card