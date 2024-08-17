import { defaultConfig, type Config } from '../config';
import setConfig from './setConfig';
import notify from './notify';

const getConfig = (): Config => {
	const userConfig: object = JSON.parse(GM_getValue('config', '{}')),
		config: Config = { ...defaultConfig, ...userConfig };

	if (Object.keys(userConfig).length === 0) {
		notify('Welcome to Canvas Utility Mod', true);
		notify(`Press ALT + ${config.keyMapping.toggleOverlay} to toggle the overlay`, true);
		setConfig(config);
	}

	return config;
};

export default getConfig;
