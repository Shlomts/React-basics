export function AnimalList({ animalInfos }) {
    return (
        <section className="animal-list">
            <h3>Rare Animals</h3>

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
