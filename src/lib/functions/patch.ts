import Toastify from 'toastify-js';

import list from './patches';

const isChunk = (node: Node) =>
	node.nodeType === 1 &&
	node.nodeName === 'SCRIPT' &&
	node instanceof HTMLElement &&
	node.hasAttribute('data-webpack');

async function patchChunk(source: string) {
	const response = await fetch(source);
	let body = await response.text();

	for (const { name, search, replace } of list) {
		if (search.test(body)) {
			body = body.replace(search, replace);

			Toastify({
				text: `${name} patch was applied successfully!`,
				gravity: 'bottom',
				position: 'right'
			}).showToast();
		}
	}

	Function(body)();
}

// Help wanted: Write better type definitions
export default function () {
	const _appendChild = document.head.appendChild;

	document.head.appendChild = function <T extends Node>(node: T) {
		if (!isChunk(node)) return _appendChild.call(this, node) as T;
		patchChunk((node as unknown as HTMLScriptElement).src);

		return node;
	};
}
