// components
import Header from './_header/header'
import Main from './_main/main'
import Footer from './_footer/footer'

// style
import './slideArea.sass'

// type
import { footerProp } from './_footer/footer.type'

const SlideArea: React.FC<footerProp> = (props) => {

    const { onClick, lang } = props

    return (
        <div className="slideArea">
            <Header />
            <Main />
            <Footer onClick={onClick} lang={lang} />
        </div>
    )
}

export default SlideArea