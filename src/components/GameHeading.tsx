import {Heading} from '@chakra-ui/react';
import {GameQuery} from '../App';

const GameHeading = ({gameQuery}: {gameQuery: GameQuery}) => {
	const heading = `${gameQuery.genre ? gameQuery.genre.name + ' ' : ''}Games ${
		gameQuery.platform ? 'on ' + gameQuery.platform.name : ''
	}`;
	return (
		<Heading as={'h1'} marginLeft={2} marginY={5} fontSize={'5xl'}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
