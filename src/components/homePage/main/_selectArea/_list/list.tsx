import { useTranslation } from "react-i18next"

// type
import { ListProps } from "./ListProps.type"

const List: React.FC<ListProps> = (props) => {

    const { t } = useTranslation()
    const { title, lists } = props

    return (
        <div className="list">
            <p>{title}</p>
            {lists && lists.map(({ text }, index) => {
                return (
                    <p className="list__text link" key={index}>{t(text || "default.text")}</p>
                )
            })}
        </div>
    )
}

export default List