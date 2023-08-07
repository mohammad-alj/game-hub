import {HStack, List, ListItem, Text, Image} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
	const {data: genres} = useGenres();
	return (
		<List>
			{genres.map(g => (
				<ListItem key={g.id} cursor={'pointer'}>
					<HStack>
						<Image
							boxSize={'32px'}
							borderRadius={'8px'}
							src={getCroppedImageUrl(g.image_background)}
							marginY={1}
						/>
						<Text>{g.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
