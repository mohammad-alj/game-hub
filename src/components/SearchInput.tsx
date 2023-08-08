import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {BsSearch} from 'react-icons/bs';

const SearchInput = () => {
	return (
		<InputGroup>
			<InputLeftElement>
				<BsSearch />
			</InputLeftElement>
			<Input
				borderRadius={'20px'}
				width={'100%'}
				placeholder='Search games'
				variant={'filled'}
			></Input>
		</InputGroup>
	);
};

export default SearchInput;
