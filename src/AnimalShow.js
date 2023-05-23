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
	return (
		<div>
			<img src={svgMap[type]} alt={type} />
			<img src={heart} alt="heart" />
		</div>
	);
};

export default AnimalShow;