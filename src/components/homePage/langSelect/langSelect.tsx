// components
import { Row, Col } from '../../Layout/layout'
import { Button } from '../../common/button/button'

// icon
import { IoMdClose } from '../../../assets/icon/index'

// style
import './langSelect.sass'

// data
import { langBtn } from '../../../data/langBtn'

const LangSelect = () => {
    return (
        <div className='langSelectArea'>
            <div className="langSelect">
                <Row className='langSelect__header'>
                    <Col className='langSelect__title'>
                        <h2>Choose a language</h2>
                        <p>This updates what you read on open.spotify.com</p>
                    </Col>
                    <Col className='langSelect__closeArea'>
                        <Button
                            content={<><IoMdClose /></>}
                            className='langSelect__closeBtn'
                        />
                    </Col>
                </Row>
                <div className='langSelect__content'>
                    {langBtn.map(({ title, subtitle }) => {
                        return (
                            <Button
                                key={title}
                                className='langSelect__langBtn'
                                bdrs={false}
                                fontSize={16}
                                hoverBg='gray'
                                content={
                                    <>
                                        <p>{title}</p>
                                        <span className='langSelect__subtitle'>{subtitle}</span>
                                    </>
                                }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LangSelect