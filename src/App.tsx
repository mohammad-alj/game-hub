import {Grid, GridItem, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area={'nav'}>
				<NavBar />
			</GridItem>
			<GridItem area={'main'}>
				<GameGrid />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'}>aside</GridItem>
			</Show>
		</Grid>
	);
};

export default App;
