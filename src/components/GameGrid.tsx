import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import {Genre} from '../hooks/useGenres';

const GameGrid = ({selectedGenre}: {selectedGenre: Genre | null}) => {
	const {data: games, error, isLoading} = useGames(selectedGenre);

	return (
		<>
			{error && <Text color={'red'}>{error}</Text>}
			<SimpleGrid
				marginTop={3}
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4,
					'2xl': 5,
				}}
				spacing={3}
				paddingX={'10px'}
			>
				{isLoading
					? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(_ => (
							<GameCardContainer key={_}>
								<GameCardSkeleton />
							</GameCardContainer>
					  ))
					: games.map(g => (
							<GameCardContainer key={g.id}>
								<GameCard game={g} />
							</GameCardContainer>
					  ))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
