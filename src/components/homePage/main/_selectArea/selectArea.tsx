import { useTranslation } from "react-i18next"

// components
import { Row, Col } from "../../../Layout/layout"
import Section from "./_section/section"
import List from "./_list/list"
import { Button } from "../../../common/button/button"

// date
import { trendArtistList } from '../../../../data/trendArtistList'
import { popArtistList } from "../../../../data/popArtistList"
import { popAlbumList } from "../../../../data/popAlbum"
import { popRadioList } from "../../../../data/popRadio"
import { featuredCharts } from "../../../../data/featuredCharts"
import { recommendAlbumsList } from "../../../../data/recommendAlbums"

// style
import './selectArea.sass'

// data
import { footerBtnLists } from "../../../../data/footerBtnLists"
import {
    companyList,
    communitiesList,
    usefulLinksList,
    spotifyPlansList
} from "../../../../data/footerInfoLists"

const SelectArea = () => {

    const { t } = useTranslation()

    return (
        <div className="selectArea">
            <div className="selectArea__content">
                <Row className="selectArea__section">
                    <Section title={t('trending songs')} contentList={trendArtistList} />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('popular artists')} contentList={popArtistList} isImgCircle />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('popular albums and singles')} contentList={popAlbumList} />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('popular radio')} contentList={popRadioList} />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('featured Charts')} contentList={featuredCharts} shuffled={false} />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('state of music today')} contentList={recommendAlbumsList} />
                </Row>
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
                                <Button
                                    key={index}
                                    className="selectArea__footerIcon"
                                    content={item.content}
                                    btnBg='black'
                                    hoverBg="gray"
                                    cursor="default"
                                />
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