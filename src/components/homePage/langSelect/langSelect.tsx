import { useTranslation } from 'react-i18next'

// components
import { Row, Col } from '../../Layout/layout'
import { Button } from '../../common/button/button'

// icon
import { IoMdClose } from '../../../assets/icon/index'

// style
import './langSelect.sass'

// data
import { langBtn } from '../../../data/langBtn'

// type
import { LangSelectProps } from './langSelect.type'

const LangSelect: React.FC<LangSelectProps> = (props) => {

    const { closeOnClick, langSelectHandleClick } = props
    const { t } = useTranslation()

    return (
        <div className='langSelectArea'>
            <div className="langSelectBody" onClick={closeOnClick}></div>
            <div className="langSelect">
                <Row className='langSelect__header'>
                    <Col className='langSelect__title'>
                        <h2>{t('choose a language')}</h2>
                        <p>{t('this updates what you read on open.spotify.com')}</p>
                    </Col>
                    <Col className='langSelect__closeArea'>
                        <Button
                            content={<><IoMdClose /></>}
                            className='langSelect__closeBtn'
                            onClick={closeOnClick}
                        />
                    </Col>
                </Row>
                <div className='langSelect__content'>
                    {langBtn.map(({ title, subtitle, code }) => {
                        return (
                            <Button
                                key={title}
                                className='langSelect__langBtn'
                                bdrs={false}
                                fontSize={16}
                                hoverBg='gray'
                                onClick={() => langSelectHandleClick(title, code)}
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