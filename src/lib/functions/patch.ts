import isChunk from './utils/isChunk';
import patchChunk from './utils/patchChunk';

const patch = (): void => {
	const appendChild = document.head.appendChild;

	// TODO: Write better type definitions
	document.head.appendChild = <T extends Node>(node: T): T => {
		if (!isChunk(node)) return appendChild.call(document.head, node) as T;
		patchChunk((node as unknown as HTMLScriptElement).src);

		return node;
	};
};

export default patch;
