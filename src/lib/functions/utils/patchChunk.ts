import Toastify from 'toastify-js';
import list from '../patches';

const patchChunk = async (source: string): Promise<void> => {
	const response = await fetch(source);
	let body = await response.text();

	for (const { name, search, replace } of list) {
		if (search.test(body)) {
			body = body.replace(search, replace);

			Toastify({
				text: `${name} patch was applied successfully!`,
				gravity: 'bottom',
				position: 'right',
				className: 'twp'
			}).showToast();
		}
	}

	Function(body)();
};

export default patchChunk;
