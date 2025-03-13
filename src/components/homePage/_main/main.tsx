import { Row, Col } from "../../Layout/layout.tsx"
import SlideArea from "./_slideArea/slideArea.tsx"
import SelectArea from "./_selectArea/selectArea.tsx"

const Main = () => {
    return (
        <Row className='homePageMain'>
            <Col className='homePageSlideArea'>
                <SlideArea />
            </Col>
            <Col className='homePageSelectArea'>
                <SelectArea />
            </Col>
        </Row>
    )
}

export default Main