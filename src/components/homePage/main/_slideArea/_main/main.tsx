import { useTranslation } from "react-i18next"

// components
import { Button } from "../../../../common/button/button"
import Card from "../../../../common/card/card"

const Main = () => {

    const { t } = useTranslation()

    return (
        <div className="slideArea__main">
            <Card className="slideArea__card">
                <span aria-label="slideAreaCard__title">{t('create your first playlist')}</span>
                <span aria-label="slideAreaCard__text">{t("it's easy, we'll help you")}</span>
                <Button
                    title={t("create playlist")}
                    fontSize={14}
                    hoverBig
                    hoverBg='white'
                    btnBg='white'
                    className="slideAreaCard__btn"
                />
            </Card>
            <Card className="slideArea__card">
                <span aria-label="slideAreaCard__title">{t("let's find some podcasts to follow")}</span>
                <span aria-label="slideAreaCard__text">{t("we'll keep you updated on new episodes")}</span>
                <Button
                    title={t("browse podcasts")}
                    fontSize={14}
                    hoverBig
                    hoverBg='white'
                    btnBg='white'
                    className="slideAreaCard__btn"
                />
            </Card>
        </div>
    )
}

export default Main