// hook
import useLangSelect from '../hooks/useLangSelect.tsx'
import useActiveValue from '../hooks/useActiveValue.tsx'

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
        handleLangSelectController,
        handleSelectLang
    } = useLangSelect()

    const {
        activeValue,
        handleActiveValue
    } = useActiveValue()

    return (
        <div className='homePage'>
            <NavBar
                value={activeValue}
                homeLogoBtnClick={() => handleActiveValue('home')}
            />
            <Main
                value={activeValue}
                lang={isLang}
                onClick={handleLangSelectController}
                sectionOnClick={handleActiveValue}
            />
            <MusicPlay />
            {isActive &&
                <LangSelect
                    closeOnClick={handleLangSelectController}
                    langSelectHandleClick={handleSelectLang}
                />}
        </div>
    )
}

export default HomePage