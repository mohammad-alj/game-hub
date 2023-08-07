import {Button, Menu, MenuButton, MenuItem, MenuList, Skeleton} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
	const {data: platforms, error, isLoading} = usePlatforms();
	return error ? null : isLoading ? (
		<Skeleton height={'40px'} width={'125px'} borderRadius={1} />
	) : (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				{platforms.map(p => (
					<MenuItem key={p.id}>{p.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
