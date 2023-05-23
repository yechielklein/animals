import { useState } from 'react';

import AnimalShow from './AnimalShow';

const getRandomAnimal = () => {
	const animals = ['bird', 'cow', 'cat', 'dog', 'alligator', 'horse'];
	return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
	const [animals, setAnimals] = useState([]);

	const addAnimal = () => {
		setAnimals([
			...animals,
			<AnimalShow type={getRandomAnimal()} />
		]);
	};

	return (
		<div>
			<button onClick={addAnimal}>Add Animal</button>
			<p>{animals}</p>
		</div>
	);
};

export default App;