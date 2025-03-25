import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// routes data
import { routes } from '../data/routes'

const AppRoute = () => {
    return (
        <BrowserRouter basename="/Spotify-Demo">
            <Suspense fallback={<>loading...</>}>
                <Routes>
                    {routes.map(({ path, element, index }) => {
                        return (
                            <Route path={path} element={element} index={index} />
                        )
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoute