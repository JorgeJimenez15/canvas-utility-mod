const isChunk = (node: Node): boolean =>
	node.nodeType === 1 &&
	node.nodeName === 'SCRIPT' &&
	node instanceof HTMLElement &&
	node.hasAttribute('data-webpack');

export default isChunk;
