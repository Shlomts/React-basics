const { useState, useEffect, useRef } = React

export function AnimalList({ animalInfos }) {
    console.log(animalInfos)

    return (
        <section className="animal-list">
            <h2>Rare Animals</h2>

            <table>
                <tbody>
                {animalInfos.map(animal => 
                    <tr key={animal.type}>
                        <td>{animal.type}</td>
                        <td>{animal.count}</td>
                        <td><a href={`https://www.google.com/search?q= ${animal.type}`} target="_blank">Search</a></td>
                    </tr>
                )}
                </tbody>
            </table>
        </section>
    )
}
