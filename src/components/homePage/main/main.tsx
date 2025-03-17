import { Row, Col } from "../../Layout/layout.tsx"
import SlideArea from "./_slideArea/slideArea.tsx"
import SelectArea from "./_selectArea/selectArea.tsx"

// type
import { footerProp } from "./_slideArea/_footer/footer.type.ts"

const Main: React.FC<footerProp> = (props) => {

    const { onClick, lang } = props

    return (
        <Row className='homePageMain'>
            <Col className='homePageSlideArea'>
                <SlideArea onClick={onClick} lang={lang} />
            </Col>
            <Col className='homePageSelectArea'>
                <SelectArea />
            </Col>
        </Row>
    )
}

export default Main