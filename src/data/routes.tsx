import { lazy } from "react"

// lazy page
const Home = lazy(() => import('../pages/homePage'))

export const routes = [
    { path: '/', element: <Home />, index: true }
]