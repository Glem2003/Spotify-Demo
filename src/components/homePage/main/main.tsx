import { Row, Col } from "../../Layout/layout.tsx"
import SlideArea from "./_slideArea/slideArea.tsx"
import SelectArea from "./_selectArea/selectArea.tsx"

// type
import { mainProp } from "./main.type.ts"

const Main: React.FC<mainProp> = (props) => {

    const {
        onClick,
        lang,
        value,
        sectionOnClick
    } = props

    return (
        <Row className='homePageMain'>
            <Col className='homePageSlideArea'>
                <SlideArea
                    onClick={onClick}
                    lang={lang}
                />
            </Col>
            <Col className='homePageSelectArea'>
                <SelectArea
                    value={value}
                    sectionOnClick={sectionOnClick}
                />
            </Col>
        </Row>
    )
}

export default Main