// hook
import useLangSelect from '../hooks/useLangSelect.tsx'

// style
import './homePage.sass'

// components
import NavBar from '../components/homePage/navBar/navBar.tsx'
import Main from '../components/homePage/main/main.tsx'
import MusicPlay from '../components/homePage/musicPlay/musicPlay.tsx'
import LangSelect from '../components/homePage/langSelect/langSelect.tsx'

const HomePage = () => {

    const {
        isActive,
        isLang,
        handleClick,
        handleSelectLang
    } = useLangSelect()

    return (
        <div className='homePage'>
            <NavBar />
            <Main onClick={handleClick} lang={isLang} />
            <MusicPlay />
            {isActive &&
                <LangSelect
                    closeOnClick={handleClick}
                    langSelectHandleClick={handleSelectLang}
                />}
        </div>
    )
}

export default HomePage