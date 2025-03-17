// style
import './homePage.sass'

// components
import NavBar from '../components/homePage/navBar/navBar.tsx'
import Main from '../components/homePage/main/main.tsx'
import MusicPlay from '../components/homePage/musicPlay/musicPlay.tsx'
import LangSelect from '../components/homePage/langSelect/langSelect.tsx'

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBar />
            <Main />
            <MusicPlay />
            <LangSelect />
        </div>
    )
}

export default HomePage