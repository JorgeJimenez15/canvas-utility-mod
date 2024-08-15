import { defaultConfig, type Config } from '../config';

const getConfig = (): Config => {
	const value: object = JSON.parse(GM_getValue('config', '{}')),
		config: Config = { ...defaultConfig, ...value };

	return config;
};

export default getConfig;
