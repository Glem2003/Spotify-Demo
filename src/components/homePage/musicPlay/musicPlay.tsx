import { useTranslation } from "react-i18next"

// components
import { Row, Col } from "../../Layout/layout.tsx"
import { Button } from "../../common/button/button.tsx"

// style
import './musicPlay.sass'

const MusicPlay = () => {

    const { t } = useTranslation()

    return (
        <div className="musicPlay">
            <Row verticalCenter>
                <Col className="musicPlay__info">
                    <h5>{t('preview of Spotify')}</h5>
                    <p>{t('sign up to get unlimited songs and podcasts with occasional ads. No credit card needed')}</p>
                </Col>
                <Col
                    className="musicPlay__btnBox"
                    horizonRight
                >
                    <Button
                        title={t("sign up free")}
                        className="musicPlay__signUpBtn"
                        btnBg="white"
                        hoverBig
                        hoverBg="white"
                        fontSize={14}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default MusicPlay