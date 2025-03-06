// icon
import { MdHomeFilled } from '../../../assets/icon/index.tsx'

//components
import { Row, Col } from "../../Layout/layout.tsx"
import { Button } from "../../common/button/button.tsx"
import Logo from "./navBar__logo/navBar__logo.tsx"
import Search from './navBar__search/navBar__search.tsx'

// type
import { color } from '../../common/button/button.type.ts'

// data
import { navBarMenu } from '../../../data/navBarMenu.tsx'

// style
import './navBar.sass'

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
                            {navBarMenu.slice(0, 3).map((item, index) => {
                                return <Button
                                    key={index}
                                    title={item.title}
                                    bdrs={item.bdrs}
                                    className={item.className}
                                    hoverBig={item.hoverBig}
                                    hoverText={item.hoverText as color}
                                />
                            })}
                        </ul>
                        <ul className='functionArea__functionBtn'>
                            {navBarMenu.slice(3).map((item, index) => {
                                return <Button
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    bdrs={item.bdrs}
                                    className={item.className}
                                    hoverBig={item.hoverBig}
                                    hoverText={item.hoverText as color}
                                    ariaLabel={item.ariaLabel}
                                    btnBg={item.btnBg as color}
                                />
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
        </nav>
    )
}

export default NavBar