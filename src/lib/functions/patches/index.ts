import page_blurred from './page_blurred';
import page_focused from './page_focused';

export type Patch = {
	name: string;
	description: string;
	search: RegExp;
	replace: string;
};

const list: Patch[] = [page_blurred, page_focused];

export default list;
