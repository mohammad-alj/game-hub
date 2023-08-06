import axios from 'axios';
export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'd2a1b8caffc54111ae0911a3e247f3e9',
	},
});
