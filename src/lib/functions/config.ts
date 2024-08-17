export type Config = {
	keyMapping: {
		toggleOverlay: string;
	};
	notification: {
		messages: boolean;
		serverMessages: boolean;
		patchesApplied: boolean;
	};
	connectivity: {
		url: string;
		session?: string;
	};
};

export const defaultConfig: Config = {
	keyMapping: {
		toggleOverlay: 'R'
	},
	notification: {
		messages: true,
		serverMessages: true,
		patchesApplied: true
	},
	connectivity: {
		url:
			import.meta.env.MODE === 'development'
				? 'ws://127.0.0.1:3000'
				: 'wss://dev.jorgejimenez.net/canvas-utility-mod'
	}
};
