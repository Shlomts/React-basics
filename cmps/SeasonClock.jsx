import { utilService } from "../services/util.service.js"

const { useState, useEffect, useRef } = React

export function SeasonClock() {
    const [isDark, setIsDark] = useState(false)
    const darkClass = isDark ? 'dark' : ''

    const date = new Date()
    const day = utilService.getDayName(date)
    const month = utilService.getMonthName(date)
    const season = utilService.getSeasonByMonth(date)
    
    const [timer, setTimer] = useState(date)
    const intervalIdRef = useRef()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setTimer(new Date())
        }, 1000)
        
        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    function onToggleIsDark() {
        setIsDark(prevDark => !prevDark)
    }
    
    return(
        <section className={`season-clock ${season} ${darkClass}`} onClick={onToggleIsDark}>
            <h3>{month} ({season})</h3>
            <img src={`./assets/img/${season}.png`} alt={season} />
            <p>{day}</p>
            <p>{utilService.padNum(timer.getHours())}:{utilService.padNum(timer.getMinutes())}:{utilService.padNum(timer.getSeconds())}</p>
        </section>
    )
}
