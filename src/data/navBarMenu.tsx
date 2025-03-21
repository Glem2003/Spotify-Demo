import { useTranslation } from 'react-i18next';

// icon
import { FaRegArrowAltCircleDown } from '../assets/icon/index'

export const useNavBarMenu = () => {

    const { t } = useTranslation()

    return [
        {
            title: t("premium"),
            className: 'functionArea__btnList',
            hoverText: 'white',
            bdrs: false,
            hoverBig: true,
            color: 'gray',
            fontSize: 16
        },
        {
            title: t("support"),
            className: 'functionArea__btnList',
            hoverText: 'white',
            bdrs: false,
            hoverBig: true,
            color: 'gray',
            fontSize: 16
        },
        {
            title: t("download"),
            className: 'functionArea__btnList',
            hoverText: 'white',
            bdrs: false,
            hoverBig: true,
            color: 'gray',
            fontSize: 16
        },
        {
            content: <><FaRegArrowAltCircleDown />{t('install App')}</>,
            ariaLabel: 'install app',
            bdrs: false,
            className: 'functionArea__btnList',
            hoverBig: true,
            hoverText: 'white',
            color: 'gray',
            fontSize: 16
        },
        {
            title: t('sign up'),
            bdrs: false,
            className: 'functionArea__btnList',
            hoverBig: true,
            hoverText: 'white',
            color: 'gray',
            fontSize: 16
        },
        {
            title: t('log in'),
            ariaLabel: 'log in',
            className: 'functionArea__btnList',
            btnBg: 'white',
            hoverBig: true,
            hoverBg: 'white',
            fontSize: 16
        }
    ]
}