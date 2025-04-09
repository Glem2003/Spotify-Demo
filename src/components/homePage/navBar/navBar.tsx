// icon
import { MdHomeFilled, GoHome } from '../../../assets/icon/index.tsx'

// components
import { Row, Col } from "../../Layout/layout.tsx"
import { Button } from "../../common/button/button.tsx"
import Logo from "./_logo/logo.tsx"
import Search from './_search/search.tsx'

// type
import { color } from '../../common/button/button.type.ts'

// data
import { useNavBarMenu } from '../../../data/navBarMenu.tsx'

// style
import './navBar.sass'

// type
import { navBarProps } from './navBar.type.ts'

const NavBar: React.FC<navBarProps> = (props) => {

    const { homeLogoBtnClick, value, searchBtnClick } = props

    const navBarMenu = useNavBarMenu()

    return (
        <nav className="navBar">
            <Row>

                <Col
                    className='navBar__logoBox'
                    onClick={homeLogoBtnClick}
                >
                    <Logo link="/" />
                </Col>

                <Col
                    verticalCenter
                    className='navBar__searchBox'
                >
                    <Button
                        content={value === 'home' ? <MdHomeFilled /> : <GoHome />}
                        className='navBar__homeLogo'
                        btnBg='black'
                        hoverBig
                        hoverBg='black'
                        fontSize={18}
                        onClick={homeLogoBtnClick}
                    />
                    <Search onClick={searchBtnClick} value={value} />
                </Col>

                <Col className='navBar__functionArea'>
                    <div className="functionArea">
                        <ul className='functionArea__areaBtn'>
                            {navBarMenu.slice(0, 3).map((
                                {
                                    title,
                                    bdrs,
                                    fontSize,
                                    className,
                                    color,
                                    hoverBig,
                                    hoverText
                                }, index
                            ) => {
                                return <Button
                                    key={index}
                                    title={title}
                                    bdrs={bdrs}
                                    fontSize={fontSize}
                                    className={className}
                                    color={color as color}
                                    hoverBig={hoverBig}
                                    hoverText={hoverText as color}
                                />
                            })}
                        </ul>
                        <ul className='functionArea__functionBtn'>
                            {navBarMenu.slice(3).map((
                                {
                                    title,
                                    content,
                                    bdrs,
                                    fontSize,
                                    className,
                                    ariaLabel,
                                    color,
                                    hoverBig,
                                    hoverText,
                                    btnBg,
                                    hoverBg
                                }, index
                            ) => {
                                return <Button
                                    key={index}
                                    title={title}
                                    content={content}
                                    bdrs={bdrs}
                                    fontSize={fontSize}
                                    className={className}
                                    ariaLabel={ariaLabel}
                                    color={color as color}
                                    hoverBig={hoverBig}
                                    hoverText={hoverText as color}
                                    btnBg={btnBg as color}
                                    hoverBg={hoverBg as color}
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