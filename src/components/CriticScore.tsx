import {Badge} from '@chakra-ui/react';

const CriticScore = ({score}: {score: number}) => {
	const colorScheme = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
	return (
		<Badge colorScheme={colorScheme} paddingX={'10px'} fontSize={'14px'}>
			{score}
		</Badge>
	);
};

export default CriticScore;
