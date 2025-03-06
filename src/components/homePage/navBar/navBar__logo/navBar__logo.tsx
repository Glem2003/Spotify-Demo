// icon
import { ImSpotify } from '../../../../assets/icon/index'
import { Link } from 'react-router-dom'

// type
import { LogoProps } from './navBar__logo.type'

const Logo: React.FC<LogoProps> = (props) => {

    const { link = '#!' } = props

    return (
        <Link to={link}>
            <ImSpotify className='navBar__logo' />
        </Link>
    )
}

export default Logo