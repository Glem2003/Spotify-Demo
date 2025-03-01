// style
import './homePage.sass'

// components
import NavBar from '../components/homePage/navBar/navBar.tsx'
import Main from '../components/homePage/main/main.tsx'
import MusicPlay from '../components/homePage/musicPlay/musicPlay.tsx'

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBar />
            <Main />
            <MusicPlay />
        </div>
    )
}

export default HomePage