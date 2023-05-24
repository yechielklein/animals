import './AnimalShow.css';

import { useState } from 'react';

import alligator from './svg/alligator.svg';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
	alligator,
	bird,
	cat,
	cow,
	dog,
	horse
};

function AnimalShow({ type }) {
	const [heartSize, setHeartSize] = useState(10);
	const handleClick = () => {
		if (heartSize >= 200) {
			return
		};

		setHeartSize(heartSize + 10);
	};

	return (
		<div className="animal-show" onClick={handleClick}>
			<img className="animal" src={svgMap[type]} alt={type} />
			<img className="heart" src={heart} alt="heart" style={{width: heartSize}} />
		</div>
	);
};

export default AnimalShow;