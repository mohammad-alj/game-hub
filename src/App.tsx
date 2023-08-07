import {Grid, GridItem, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '225px 1fr',
			}}
		>
			<GridItem area={'nav'}>
				<NavBar />
			</GridItem>
			<GridItem area={'main'}>
				<GameGrid />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'} paddingX={4}>
					<GenreList />
				</GridItem>
			</Show>
		</Grid>
	);
};

export default App;
