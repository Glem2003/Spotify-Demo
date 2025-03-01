// components
import { Row, Col } from "../../Layout/layout.tsx"
import Button from "../../common/button/button.tsx"

const MusicPlay = () => {
    return (
        <div className="musicPlay">
            <Row verticalCenter>
                <Col className="musicPlay__info">
                    <h5>Preview of Spotify</h5>
                    <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                </Col>
                <Col
                    className="musicPlay__btnBox"
                    horizonRight
                >
                    <Button
                        bgWhite
                        hoverBig
                        title="Sign up free"
                        className="musicPlay__signUpBtn"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default MusicPlay