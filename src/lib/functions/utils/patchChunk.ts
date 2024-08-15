import list from '../patches';
import notify from './notify';

const patchChunk = async (source: string): Promise<void> => {
	const response = await fetch(source);
	let body = await response.text();

	for (const { name, search, replace } of list) {
		if (search.test(body)) {
			body = body.replace(search, replace);

			notify(`${name} patch was applied successfully!`, true);
		}
	}

	Function(body)();
};

export default patchChunk;
