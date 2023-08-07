import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {HStack, Icon, Text} from '@chakra-ui/react';
import {Platform} from '../hooks/useGames';
import {IconType} from 'react-icons';

interface Props {
	platforms: Platform[];
}
const PlatformIconList = ({platforms}: Props) => {
	const iconMap: {[key: string]: IconType} = {
		pc: FaWindows,
		xbox: FaXbox,
		playstation: FaPlaystation,
		nintendo: SiNintendo,
		linux: FaLinux,
		mac: FaApple,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};
	return (
		<HStack marginTop={1}>
			{platforms.map(p => (
				<Icon as={iconMap[p.slug]} color={'gray.500'} key={p.slug} />
			))}
		</HStack>
	);
};

export default PlatformIconList;
