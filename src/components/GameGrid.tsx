import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const {games, error, isLoading} = useGames();

	return (
		<>
			{error && <Text color={'red'}>{error}</Text>}
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4,
					'2xl': 5,
				}}
				spacing={'10px'}
				paddingX={'10px'}
			>
				{isLoading
					? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(_ => <GameCardSkeleton />)
					: games.map(g => <GameCard game={g} key={g.id} />)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
