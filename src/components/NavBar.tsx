import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		<HStack justifyContent={'space-between'} paddingX='10px'>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<Image src={logo} boxSize={'60px'} />
				<Text>Game Hub</Text>
			</div>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
