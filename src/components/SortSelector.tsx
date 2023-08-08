import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {useState} from 'react';
import {BsChevronDown} from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (order: string) => void;
}
const SortSelector = ({onSelectSortOrder}: Props) => {
	const [sortOrder, setSortOrder] = useState('Relevance');
	const menuItems: {value: string; label: string}[] = [
		{value: '', label: 'Relevance'},
		{value: '-added', label: 'Date added'},
		{value: 'name', label: 'Name'},
		{value: '-released', label: 'Release date'},
		{value: '-metacritic', label: 'Popularity'},
		{value: '-rating', label: 'Average rating'},
	];
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Sort by: {sortOrder}
			</MenuButton>
			<MenuList>
				{menuItems.map(mi => (
					<MenuItem
						key={mi.value}
						value={mi.value}
						onClick={() => {
							onSelectSortOrder(mi.value);
							setSortOrder(mi.label);
						}}
					>
						{mi.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
