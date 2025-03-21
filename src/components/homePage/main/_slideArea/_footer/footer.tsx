import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// icon
import { MdOutlineLanguage } from '../../../../../assets/icon/index'

// components
import { Button } from "../../../../common/button/button"

// data
import { footerList } from '../../../../../data/footerList'

// type
import { footerProp } from './footer.type'

const Footer: React.FC<footerProp> = (props) => {

    const { onClick, lang } = props
    const { t } = useTranslation()

    return (
        <div className="slideArea__footer">
            <nav className="slideArea__footerNavigation">
                <ul className='slideArea__footerList'>
                    {footerList.map(({ link, text }, index) => {
                        return (
                            <li key={index}><Link to={link}>{t(text)}</Link></li>
                        )
                    })}
                </ul>
                <Link to={'#!'} className='slideArea__footerCookies'>{t('cookies')}</Link>
            </nav>
            <Button
                content={<><MdOutlineLanguage />{lang}</>}
                className='slideArea__footerBtn'
                fontSize={14}
                onClick={onClick}
            />
        </div>
    )
}

export default Footer