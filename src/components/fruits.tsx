import { useState } from "react";
import { FruitsContextProvider, useFruitsContext } from "../contexts/fruits";

export function Fruits() {
    return (
        <FruitsContextProvider>
            <FruitList />
        </FruitsContextProvider>
    );
}

function FruitList() {
    const { fruits, addFruit } = useFruitsContext();
    const fruitOptions = ["apple", "banana", "orange", "grape", "mango"];
    const [selectedFruit, setSelectedFruit] = useState(fruitOptions[0]);

    return (
        <div>
            <div>Current fruits on the list: {fruits.join(", ")}</div>
            <div>
                <select 
                    value={selectedFruit} 
                    onChange={(e) => setSelectedFruit(e.target.value)}
                >
                    {fruitOptions.map((fruit) => (
                        <option key={fruit} value={fruit}>
                            {fruit}
                        </option>
                    ))}
                </select>
                <button onClick={() => addFruit(selectedFruit)}>
                    Add {selectedFruit}
                </button>
            </div>
        </div>
    );
}
