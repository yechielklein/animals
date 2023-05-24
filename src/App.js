import './App.css';

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
			getRandomAnimal()
		]);
	};

	const renderedAnimals = animals.map(
		(animal, index) => <AnimalShow type={animal} key={index} />
	);

	return (
		<div>
			<button onClick={addAnimal}>Add Animal</button>
			<div>{renderedAnimals}</div>
		</div>
	);
};

export default App;