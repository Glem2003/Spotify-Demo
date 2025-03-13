// components
import { Button } from "../../../../common/button/button"
import Card from "../../../../common/card/card"

const Main = () => {
    return (
        <div className="slideArea__main">
            <Card className="slideArea__card">
                <span aria-label="slideAreaCard__title">Create your first playlist</span>
                <span aria-label="slideAreaCard__text">It's easy, we'll help you</span>
                <Button
                    title="Create playlist"
                    fontSize={14}
                    hoverBig
                    hoverBg='white'
                    btnBg='white'
                    className="slideAreaCard__btn"
                />
            </Card>
            <Card className="slideArea__card">
                <span aria-label="slideAreaCard__title">Let's find some podcasts to follow</span>
                <span aria-label="slideAreaCard__text">We'll keep you updated on new episodes</span>
                <Button
                    title="Browse podcasts"
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