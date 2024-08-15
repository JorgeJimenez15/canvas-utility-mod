export type Config = {
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
	notification: {
		messages: true,
		serverMessages: true,
		patchesApplied: true
	},
	connectivity: {
		url: import.meta.env.PROD
			? 'wss://dev.jorgejimenez.net/canvas-utility-mod'
			: 'ws://127.0.0.1:3000'
	}
};
