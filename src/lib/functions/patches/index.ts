import page_blured from './page_blurred';
import page_focused from './page_focused';

export type Patch = {
	name: string;
	description: string;
	search: RegExp;
	replace: string;
};

const list = [page_blured, page_focused];

export default list;
