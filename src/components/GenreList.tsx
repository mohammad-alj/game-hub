import {HStack, List, ListItem, Text, Image, Skeleton, SkeletonText} from '@chakra-ui/react';
import useGenres, {Genre} from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import {useState} from 'react';

const GenreList = () => {
	const {data: genres, isLoading, error} = useGenres();
	const [selectedGenre, selectGenre] = useState<Genre | null>(null);
	return (
		<List>
			{isLoading
				? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(_ => (
						<ListItem key={_}>
							<HStack>
								<Skeleton boxSize={'32px'} />
								<SkeletonText />
							</HStack>
						</ListItem>
				  ))
				: error
				? null
				: genres.map(g => (
						<ListItem
							key={g.id}
							cursor={'pointer'}
							onClick={() => selectGenre(g)}
							{...(g === selectedGenre
								? {fontWeight: 'bold', textDecoration: 'underline'}
								: null)}
						>
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
