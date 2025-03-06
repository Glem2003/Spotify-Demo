import { IoSearchOutline, PiBrowsersBold } from '../../../../assets/icon/index'

const Search = () => {
    return (
        <div className="searchBox">
            <IoSearchOutline className='searchBox__logo'/>
            <input type="search" className="searchBox__input" placeholder='what do you what to play?' />
            <PiBrowsersBold className='searchBox__browse' />
        </div>
    )
}

export default Search