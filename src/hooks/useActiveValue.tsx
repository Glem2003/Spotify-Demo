import { useState } from "react";

const useActiveValue = () => {

    const [activeValue, setActiveValue] = useState<string>('home')

    const handleActiveValue = (value: string) => {

        const selectArea = document.querySelector('.selectArea') as HTMLElement
        if (value) {
            selectArea.scrollTop = 0
            setActiveValue(value)
        }
    }

    return {
        activeValue,
        setActiveValue,
        handleActiveValue
    }
}

export default useActiveValue