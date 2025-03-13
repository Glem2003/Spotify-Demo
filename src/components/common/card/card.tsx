import clsx from 'clsx'

// style
import './card.sass'

// type
import { cardProps } from './card.type'

const Card: React.FC<cardProps> = (props) => {

    const { className, children } = props

    return (
        <div
            className={
                clsx(
                    className,
                    'card'
                )
            }
        >
            {children}
        </div>
    )
}

export default Card