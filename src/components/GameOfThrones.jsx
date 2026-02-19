import { useState } from "react";
import { useEffect } from "react";
import Maison from "./Maison";
import Personnages from "./Personnages";
import Types from "./Types";

const GameOfThrones = () => {
    const [houses, setHouses] = useState([]);
    const [setSelectedHouse] = useState(null);
    const [pers] = useState([]);
    const [selectedPers, setSelectedPers] = useState(null);

    useEffect(() => {
        fetch("https://www.anapioficeandfire.com/api/houses")
            .then((res) => res.json())
            .then((data) => setHouses(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="layout">
            <aside className="sidebar">
                <h2>Maisons</h2>
                {houses.map((house) => (
                <Maison
                    key={house.url}
                    house={house}
                    onClick={() => setSelectedHouse(house)}
                />
                ))}
            </aside>
            <div className="content">
                <h2>Personnages</h2>
                {pers.map((char) => (
                <Personnages
                    key={char.url}
                    pers={char}
                    onDetails={() => setSelectedPers(char)}
                />
                ))}
            </div>
            {selectedPers && (
                <Types
                character={selectedPers}
                onClose={() => setSelectedPers(null)}
                />
            )}
        </div>
    );
}
export default GameOfThrones;