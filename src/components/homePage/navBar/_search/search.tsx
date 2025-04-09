import { useTranslation } from 'react-i18next'

// icon
import { IoSearchOutline, PiBrowsersBold, PiBrowsersFill } from '../../../../assets/icon/index'

// type
import { SearchProps } from './search.type'

const Search: React.FC<SearchProps> = (props) => {

    const { onClick, value } = props
    const { t } = useTranslation()

    return (
        <div className="searchBox">
            <IoSearchOutline className='searchBox__logo' />
            <input type="search" className="searchBox__input" placeholder={t("what do you what to play")} />
            {value !== 'browse' ?
                <PiBrowsersBold className='searchBox__browse' onClick={onClick} /> :
                <PiBrowsersFill className='searchBox__browse' onClick={onClick} />
            }
        </div>
    )
}

export default Search