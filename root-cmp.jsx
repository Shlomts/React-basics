import { AnimalList } from "./cmps/AnimalList.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
// import { CountDown } from "./cmps/CountDown.jsx"
// import { WatcherApp } from "./cmps/WatcherApp.jsx"
// import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

export function App() {
    const animals = [
        { type: "Malayan Tiger", count: 787 },
        { type: "Mountain Gorilla", count: 212 },
        { type: "Fin Whale", count: 28 },
    ]

    return (
        <section className="app">
            <header className="app-header">
                <h1>Epic App</h1>
            </header>
            <main className="container">
                <h2>React! The App</h2>
                <div className="comps-container">
                    <AnimalList animalInfos={animals} />
                    <SeasonClock />
                    {/* <CountDown />
                    <WatcherApp />
                    <MouseMonitor /> */}
                </div>
            </main>
        </section>
    )
}
