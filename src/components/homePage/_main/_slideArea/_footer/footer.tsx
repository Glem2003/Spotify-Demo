import { Link } from 'react-router-dom'

// icon
import { MdOutlineLanguage } from '../../../../../assets/icon/index'

// components
import { Button } from "../../../../common/button/button"

const Footer = () => {
    return (
        <div className="slideArea__footer">
            <nav className="slideArea__footerNavigation">
                <ul className='slideArea__footerList'>
                    <li><Link to={'#!'}>Legal</Link></li>
                    <li><Link to={'#!'}>Safety & PrivacyCenter</Link></li>
                    <li><Link to={'#!'}>Privacy Policy</Link></li>
                    <li><Link to={'#!'}>Cookies</Link></li>
                    <li><Link to={'#!'}>About Ads</Link></li>
                    <li><Link to={'#!'}>Accessibility</Link></li>
                </ul>
                <Link to={'#!'} className='slideArea__footerCookies'>Cookies</Link>
            </nav>
            <Button
                content={<><MdOutlineLanguage />English</>}
                className='slideArea__footerBtn'
                fontSize={14}
            />
        </div>
    )
}

export default Footer