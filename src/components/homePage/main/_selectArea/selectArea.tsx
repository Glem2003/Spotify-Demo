import { useTranslation } from "react-i18next"

// components
import { Row } from "../../../Layout/layout"
import Section from "./_section/section"

// date
import { trendArtistList } from '../../../../data/trendArtistList'
import { popArtistList } from "../../../../data/popArtistList"

// style
import './selectArea.sass'

const SelectArea = () => {

    const { t } = useTranslation()

    return (
        <div className="selectArea">
            <div className="selectArea__content">
                <Row className="selectArea__section">
                    <Section title={t('trending songs')} contentList={trendArtistList} />
                </Row>
                <Row className="selectArea__section">
                    <Section title={t('popular artists')} contentList={popArtistList} isImgCircle/>
                </Row>
            </div>
        </div>
    )
}

export default SelectArea