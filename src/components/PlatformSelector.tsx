import {Box, Button, Menu, MenuButton, MenuItem, MenuList, Skeleton} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms, {Platform} from '../hooks/usePlatforms';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
	const {data: platforms, error, isLoading} = usePlatforms();

	return error ? null : isLoading ? (
		<Box borderRadius={4} overflow={'hidden'}>
			<Skeleton height={'40px'} width={'125px'} />
		</Box>
	) : (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{platforms.map(p => (
					<MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
						{p.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
