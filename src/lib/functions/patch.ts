import Toastify from 'toastify-js';
import list from './patches';

const isChunk = (node: Node): boolean =>
	node.nodeType === 1 &&
	node.nodeName === 'SCRIPT' &&
	node instanceof HTMLElement &&
	node.hasAttribute('data-webpack');

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

const initialize = (): void => {
	const appendChild = document.head.appendChild;

	// TODO: Write better type definitions
	document.head.appendChild = <T extends Node>(node: T): T => {
		if (!isChunk(node)) return appendChild.call(document.head, node) as T;
		patchChunk((node as unknown as HTMLScriptElement).src);

		return node;
	};
};

export default initialize;
