import {Card, CardBody, Skeleton, SkeletonText, useColorMode} from '@chakra-ui/react';

const GameCardSkeleton = () => {
	const {colorMode} = useColorMode();
	return (
		<Card height={'100%'} width={'100%'} background={colorMode === 'light' ? '#dfdfdf' : ''}>
			<Skeleton height={'200px'} />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
