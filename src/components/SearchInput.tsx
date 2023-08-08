import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {useRef} from 'react';
import {BsSearch} from 'react-icons/bs';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
	const searchRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onChange={e => {
				e.preventDefault();
				if (searchRef.current) onSearch(searchRef.current.value);
			}}
		>
			<InputGroup>
				<InputLeftElement>
					<BsSearch />
				</InputLeftElement>
				<Input
					ref={searchRef}
					borderRadius={'20px'}
					placeholder='Search games'
					variant={'filled'}
				></Input>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
