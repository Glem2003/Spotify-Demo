import clsx from "clsx"

// components
import Card from "../../../../common/card/card"
import { Button } from "../../../../common/button/button"

// style
import './infoCard.sass'

// hooks
import usePlayBtnShow from "../../../../../hooks/usePlayBtnShow"

// icon
import { IoPlaySharp } from '../../../../../assets/icon/index'

// type
import { InfoCardProps } from "./infoCard.type"

const InfoCard: React.FC<InfoCardProps> = (props) => {

    const { album, artists, subtitle, img, isImgCircle } = props

    const { isPlayBtnVisible, showPlayBtn, hidePlayBtn } = usePlayBtnShow()

    return (
        <Card
            className="infoCard"
            onMouseEnter={showPlayBtn}
            onMouseLeave={hidePlayBtn}
        >
            <div className="infoCard__imgBox">
                <img
                    src={img}
                    alt=""
                    className={
                        clsx(
                            'infoCard__img',
                            isImgCircle && 'infoCard__img--circle'
                        )
                    }
                />
                <Button
                    className={`playBtn playBtn${isPlayBtnVisible ? '--show' : isPlayBtnVisible === null ? '' : '--hide'}`}
                    content={<IoPlaySharp className="playBtn__icon" />}
                />
            </div>
            <div className="infoCard__textBox">
                {album && <p className="infoCard__name link">{album}</p>}
                {artists && <p className="infoCard__type link">{artists}</p>}
                {subtitle && <p className="infoCard__subtitle">{subtitle}</p>}
            </div>
        </Card>
    )
}

export default InfoCard