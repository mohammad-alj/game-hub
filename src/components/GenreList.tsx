import {
	HStack,
	List,
	ListItem,
	Image,
	Skeleton,
	SkeletonText,
	Button,
	Heading,
} from '@chakra-ui/react';
import useGenres, {Genre} from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import {useState} from 'react';

const GenreList = ({onSelectGenre}: {onSelectGenre: (genre: Genre) => void}) => {
	const {data: genres, isLoading, error} = useGenres();
	const [selectedGenre, selectGenre] = useState<Genre | null>(null);
	return (
		<>
			<Heading marginBottom={3} marginTop={5} fontSize={'2xl'}>
				Genres
			</Heading>
			<List>
				{isLoading
					? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
							_ => (
								<ListItem key={_}>
									<HStack>
										<Skeleton boxSize={'32px'} />
										<SkeletonText />
									</HStack>
								</ListItem>
							),
					  )
					: error
					? null
					: genres.map(g => (
							<ListItem
								key={g.id}
								cursor={'pointer'}
								onClick={() => selectGenre(g)}
								textDecoration={g === selectedGenre ? 'underline' : 'none'}
							>
								<HStack>
									<Image
										boxSize={'32px'}
										borderRadius={'8px'}
										src={getCroppedImageUrl(g.image_background)}
										marginY={1}
										objectFit={'cover'}
									/>
									<Button
										fontSize={'lg'}
										variant={'link'}
										onClick={() => onSelectGenre(g)}
									>
										{g.name}
									</Button>
								</HStack>
							</ListItem>
					  ))}
			</List>
		</>
	);
};

export default GenreList;
