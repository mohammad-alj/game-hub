import {Grid, GridItem, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import {useState} from 'react';
import {Genre} from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import {Platform} from './hooks/usePlatforms';

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
				<PlatformSelector
					onSelectPlatform={p => {
						setSelectedPlatform(p);
						console.log(p);
					}}
					selectedPlatform={selectedPlatform}
				/>
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'} paddingX={4}>
					<GenreList onSelectGenre={genre => setSelectedGenre(genre)} />
				</GridItem>
			</Show>
		</Grid>
	);
};

export default App;
