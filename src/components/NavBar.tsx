import {Flex, HStack, Image, Text} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<HStack paddingX='10px' spacing={1}>
			<Image src={logo} boxSize={'60px'} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
