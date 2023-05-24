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
	const [heartSize, setHeartSize] = useState(20);
	const handleClick = () => {
		if (heartSize >= 200) {
			return
		};

		setHeartSize(heartSize + 20);
	};

	return (
		<div onClick={handleClick}>
			<img src={svgMap[type]} alt={type} height={200} />
			<img src={heart} alt="heart" height={heartSize} />
		</div>
	);
};

export default AnimalShow;