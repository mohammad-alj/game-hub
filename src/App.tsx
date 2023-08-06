import {Grid, GridItem, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';

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
			<GridItem area={'main'} bg={'dodgerblue'}>
				main
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'} bg={'gold'}>
					aside
				</GridItem>
			</Show>
		</Grid>
	);
};

export default App;
