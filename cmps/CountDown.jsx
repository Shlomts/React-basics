import { utilService } from "../services/util.service.js"

const { useState, useEffect, useRef } = React

export function CountDown({ startFrom, onDone }) {
    const [count, setCount] = useState(startFrom)
    const intervalIdRef = useRef()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCount((count) => count - 1)
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    function getCountClass() {
        if (count <= 6) return "alert"
        return ""
    }

    const countClass = getCountClass()
    if (count === 0) {
        clearInterval(intervalIdRef.current)
        onDone()
    }

    return (
        <section className={`count-down ${countClass}`}>
            <h3>THE FINAL COUNTDOWN</h3>
            <p>{utilService.padNum(count)}</p>
        </section>
    )
}
