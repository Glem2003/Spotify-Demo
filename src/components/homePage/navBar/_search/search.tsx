import { useTranslation } from 'react-i18next'
import { IoSearchOutline, PiBrowsersBold } from '../../../../assets/icon/index'

const Search = () => {

    const { t } = useTranslation()

    return (
        <div className="searchBox">
            <IoSearchOutline className='searchBox__logo' />
            <input type="search" className="searchBox__input" placeholder={t("what do you what to play")} />
            <PiBrowsersBold className='searchBox__browse' />
        </div>
    )
}

export default Search