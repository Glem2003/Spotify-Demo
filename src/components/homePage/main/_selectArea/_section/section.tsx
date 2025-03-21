import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

// components
import InfoCard from "../_infoCard/infoCard"

// style
import './section.sass'

// type
import { sectionProps } from "./section.type"

const Section: React.FC<sectionProps> = (props) => {

    const { t } = useTranslation()
    
    const { title, contentList, isImgCircle } = props

    const shuffledContent = [...(contentList || [])].sort(() => Math.random() - 0.5)

    return (
        <section className="section">
            <div className="section__header">
                <h2 className="section__title link"><Link to={'#!'}>{title}</Link></h2>
                <p className="section__text link"><Link to={'#!'}>{t("show all")}</Link></p>
            </div>
            <div className="section__content">
                {shuffledContent.slice(0, 5).map((item, index) => {
                    return (
                        <InfoCard
                            key={index}
                            album={item.album}
                            artists={item.artists}
                            subtitle={item.subtitle}
                            img={item.img}
                            isImgCircle={isImgCircle}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Section