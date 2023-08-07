import {Grid, GridItem, HStack, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import {useState} from 'react';
import {Genre} from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import {Platform} from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null});

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '250px 1fr',
			}}
		>
			<GridItem area={'nav'}>
				<NavBar />
			</GridItem>
			<GridItem area={'main'}>
				<HStack gap={3} paddingLeft={2.5} marginBottom={5}>
					<PlatformSelector
						onSelectPlatform={platform => {
							setGameQuery({...gameQuery, platform});
							console.log(platform);
						}}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector />
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'} paddingX={4}>
					<GenreList onSelectGenre={genre => setGameQuery({...gameQuery, genre})} />
				</GridItem>
			</Show>
		</Grid>
	);
};

export default App;
