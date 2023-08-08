import {Image, ImageProps} from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';

const Emoji = ({rating}: {rating: number}) => {
	const emojiMap: {[key: number]: ImageProps} = {
		3: {src: meh, alt: 'meh'},
		4: {src: thumbsUp, alt: 'pretty good'},
		5: {src: bullsEye, alt: 'amazing'},
	};

	return rating >= 3 ? (
		<Image {...emojiMap[rating]} boxSize={rating === 5 ? '35px' : '25px'} marginTop={1} />
	) : null;
};

export default Emoji;
