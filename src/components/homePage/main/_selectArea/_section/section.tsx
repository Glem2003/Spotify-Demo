import clsx from "clsx"
import { useTranslation } from "react-i18next"

// components
import InfoCard from "../_infoCard/infoCard"

// style
import './section.sass'

// type
import { sectionProps } from "./section.type"

const Section: React.FC<sectionProps> = (props) => {

    const { t } = useTranslation()

    const {
        title,
        contentList,
        isImgCircle,
        shuffled = true,
        sectionOnClick,
        link = true,
        bigSize,
        slice = true
    } = props

    const shuffledContent = shuffled ? [...(contentList || [])].sort(() => Math.random() - 0.5) : [...(contentList || [])]

    return (
        <section className="section">
            <div className={
                clsx(
                    "section__header",
                    !link && "section__header--only-title"
                )}
            >
                {link ? (
                    <>
                        <h2 className="section__title link" onClick={sectionOnClick}>{title}</h2>
                        <p className="section__text link" onClick={sectionOnClick}>{t("show all")}</p>
                    </>
                ) : (
                    <h1 className="section__title">{title}</h1>
                )}
            </div>
            <div className={
                clsx(
                    "section__content",
                    !link && "section__content--grid-column-4",
                    bigSize && 'section__content--gap-32'
                )}
            >
                {slice ? (
                    shuffledContent.slice(0, 5).map((item, index) => (
                        <InfoCard
                            key={index}
                            album={item.album}
                            artists={item.artists}
                            subtitle={item.subtitle}
                            img={item.img}
                            isImgCircle={isImgCircle}
                            bigSize={bigSize}
                        />
                    ))
                ) : (
                    shuffledContent.map((item, index) => (
                        <InfoCard
                            key={index}
                            album={item.album}
                            artists={item.artists}
                            subtitle={item.subtitle}
                            img={item.img}
                            isImgCircle={isImgCircle}
                            bigSize={bigSize}
                        />
                    ))
                )}
            </div>
        </section >
    )
}

export default Section