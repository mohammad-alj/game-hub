import {Card, CardBody, HStack, Heading, Image, useColorMode} from '@chakra-ui/react';
import {Game} from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
	game: Game;
}

const GameCard = ({game}: Props) => {
	const {colorMode} = useColorMode();
	return (
		<Card height={'100%'} width={'100%'} background={colorMode === 'light' ? '#dfdfdf' : ''}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody paddingTop={3} display={'flex'} flexDirection={'column'} gap={3}>
				<HStack justifyContent={'space-between'}>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={'2xl'}>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
