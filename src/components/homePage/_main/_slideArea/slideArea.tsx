// components
import Header from './_header/header'
import Main from './_main/main'
import Footer from './_footer/footer'

// style
import './slideArea.sass'

const SlideArea = () => {
    return (
        <div className="slideArea">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default SlideArea