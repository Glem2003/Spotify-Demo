// icon
import { MdHomeFilled } from '../../../assets/icon/index.tsx'

//components
import { Row, Col } from "../../Layout/layout.tsx"
import { Button } from "../../common/button/button.tsx"
import Logo from "./navBar__logo/navBar__logo.tsx"
import Search from './navBar__search/navBar__search.tsx'

const NavBar = () => {
    return (
        <nav className="navBar">
            <Row>

                <Col className='navBar__logoBox'>
                    <Logo link="/" />
                </Col>

                <Col
                    verticalCenter
                    className='navBar__searchBox'
                >
                    <Button
                        content={<MdHomeFilled />}
                        className='navBar__homeLogo'
                        btnBg='black'
                        hoverBig
                        hoverBg='black'
                    />
                    <Search />
                </Col>

                <Col className='navBar__functionArea'>
                    <div className="functionArea">
                        <ul className='functionArea__areaBtn'>
                            <li>Premium</li>
                            <li>Support</li>
                            <li>Download</li>
                        </ul>
                        <ul className='functionArea__functionBtn'>
                            <li>Premium</li>
                            <li>Support</li>
                            <li>Download</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </nav>
    )
}

export default NavBar