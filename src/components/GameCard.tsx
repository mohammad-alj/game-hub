import {Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react';
import {Game} from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({game}: Props) => {
	return (
		<Card height={'100%'} width={'100%'}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody paddingTop={3} display={'flex'} flexDirection={'column'} gap={3}>
				<HStack justifyContent={'space-between'}>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={'2xl'}>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
