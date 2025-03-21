import { useState, useCallback } from "react"

const usePlayBtnShow = () => {

    const [isPlayBtnVisible, setPlayBtnVisible] = useState<boolean | null>(null)

    const showPlayBtn = useCallback(() => setPlayBtnVisible(true), [])
    const hidePlayBtn = useCallback(() => setPlayBtnVisible(false), [])

    return { isPlayBtnVisible, showPlayBtn, hidePlayBtn }
}

export default usePlayBtnShow