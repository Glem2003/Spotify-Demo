import { useTranslation } from 'react-i18next'

// icon
import { IoMdAdd } from '../../../../../assets/icon/index'

// components
import { Button } from "../../../../common/button/button"

const Header = () => {

    const { t } = useTranslation()

    return (
        <div className="slideArea__header">
            <Button
                title={t('your Library')}
                className='slideArea__headerTitle'
                color='white'
                fontSize={16}
                cursor='default'
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