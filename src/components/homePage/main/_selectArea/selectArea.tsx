import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

// components
import { Row, Col } from "../../../Layout/layout"
import Section from "./_section/section"
import List from "./_list/list"
import { Button } from "../../../common/button/button"

// date
import { selectAreaContentLists } from "../../../../data/selectAreaContentLists"
import { footerBtnLists } from "../../../../data/footerBtnLists"
import {
    companyList,
    communitiesList,
    usefulLinksList,
    spotifyPlansList
} from "../../../../data/footerInfoLists"

// style
import './selectArea.sass'

// type
import { selectAreaProp } from "./selectArea.type"

const SelectArea: React.FC<selectAreaProp> = (props) => {

    const { value, sectionOnClick } = props
    const { t } = useTranslation()

    // content data
    const trendingSongs = selectAreaContentLists[0]
    const popularArtists = selectAreaContentLists[1]
    const popularAlbumsAndSingles = selectAreaContentLists[2]
    const popularRadio = selectAreaContentLists[3]
    const featuredCharts = selectAreaContentLists[4]
    const stateOfMusicToday = selectAreaContentLists[5]

    return (
        <div className="selectArea">
            <div className="selectArea__content">

                {value === 'home' && selectAreaContentLists.map(({ title, contentLists, config }, index) => {
                    return (
                        <Row className="selectArea__section" key={index}>
                            <Section
                                title={t(title)}
                                contentList={contentLists}
                                {...config}
                                sectionOnClick={() => sectionOnClick?.(title)}
                            />
                        </Row>
                    )
                })}

                {value === 'trending songs' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t(trendingSongs.title)}
                            contentList={trendingSongs.contentLists}
                            link={false}
                            bigSize
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'popular artists' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t(popularArtists.title)}
                            contentList={popularArtists.contentLists}
                            link={false}
                            bigSize
                            isImgCircle
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'popular albums and singles' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t('popular albums')}
                            contentList={popularAlbumsAndSingles.contentLists}
                            link={false}
                            bigSize
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'popular radio' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t(popularRadio.title)}
                            contentList={popularRadio.contentLists}
                            link={false}
                            bigSize
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'featured Charts' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t(featuredCharts.title)}
                            contentList={featuredCharts.contentLists}
                            link={false}
                            bigSize
                            shuffled={false}
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'state of music today' && (
                    <Row className="selectArea__section" >
                        <Section
                            title={t(stateOfMusicToday.title)}
                            contentList={stateOfMusicToday.contentLists}
                            link={false}
                            bigSize
                            slice={false}
                        />
                    </Row>
                )}

                {value === 'browse' && (
                    <Row className="selectArea__section" >
                        <h2>Browse all</h2>
                    </Row>
                )}

            </div>
            <div className="selectArea__footer">
                <Row className="selectArea__info">
                    <Col className="selectArea__footerLists">
                        <List title={t("company")} lists={companyList} />
                        <List title={t("communities")} lists={communitiesList} />
                        <List title={t("useful links")} lists={usefulLinksList} />
                        <List title={t("spotify Plans")} lists={spotifyPlansList} />
                    </Col>
                    <Col className="selectArea__footerIconLists">
                        {footerBtnLists.map((item, index) => {
                            return (
                                <Link to={item.link} target="_blank" >
                                    <Button
                                        key={index}
                                        className="selectArea__footerIcon"
                                        content={item.content}
                                        btnBg='black'
                                        hoverBg="gray"
                                        cursor="default"
                                    />
                                </Link>
                            )
                        })}
                    </Col>
                </Row>
                <div className="selectArea__copyright">
                    <p>© 2025 Spotify AB</p>
                </div>
            </div>
        </div>
    )
}

export default SelectArea