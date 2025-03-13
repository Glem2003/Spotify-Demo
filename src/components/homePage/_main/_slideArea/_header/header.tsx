// icon
import { BiLibrary, IoMdAdd } from '../../../../../assets/icon/index'

// components
import { Button } from "../../../../common/button/button"

const Header = () => {
    return (
        <div className="slideArea__header">
            <Button
                content={<><BiLibrary />Your Library</>}
                className='slideArea__headerTitle'
                color='gray'
                hoverText='white'
                fontSize={16}
            />
            <Button
                content={<IoMdAdd />}
                className='slideArea__headerBtn'
                ariaLabel='add'
                color='gray'
                hoverText='white'
                hoverBg='black'
                fontSize={14}
            />
        </div>
    )
}

export default Header