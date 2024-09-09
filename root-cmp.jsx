import { AnimalList } from "./cmps/AnimalList.jsx"

export function App() {
    const animals = [
        { type: "Malayan Tiger", count: 787 },
        { type: "Mountain Gorilla", count: 212 },
        { type: "Fin Whale", count: 28 },
    ]

    return (
        <section className="app">
            <header className="app-header">
                <h1>My App</h1>
            </header>
            <main className="container">
                Hello React App
                <AnimalList animalInfos={animals} />
                {/* <SimpleTimer /> */}
                {/* <UserPreview /> */}
                {/* <SimpleCounter /> */}
            </main>
        </section>
    )
}
