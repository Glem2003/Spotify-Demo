import { FaRegArrowAltCircleDown } from '../assets/icon/index'

export const navBarMenu = [
    {
        title: 'Premium',
        className: 'functionArea__btnList',
        hoverText: 'white',
        bdrs: false,
        hoverBig: true
    },
    {
        title: 'Support',
        className: 'functionArea__btnList',
        hoverText: 'white',
        bdrs: false,
        hoverBig: true
    },
    {
        title: 'Download',
        className: 'functionArea__btnList',
        hoverText: 'white',
        bdrs: false,
        hoverBig: true
    },
    {
        content: <><FaRegArrowAltCircleDown />Install App</>,
        ariaLabel: 'install app',
        bdrs: false,
        className: 'functionArea__btnList',
        hoverBig: true,
        hoverText: 'white'
    },
    {
        title: 'Sign up',
        bdrs: false,
        className: 'functionArea__btnList',
        hoverBig: true,
        hoverText: 'white'
    },
    {
        title: 'Log in',
        ariaLabel: 'log in',
        className: 'functionArea__btnList',
        btnBg: 'white',
        hoverBig: true,
        hoverBg: 'white'
    }
]