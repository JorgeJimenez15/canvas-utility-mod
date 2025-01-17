import type { Config } from '../config';

const setConfig = (config: Config): void => {
	GM_setValue('config', JSON.stringify(config));
};

export default setConfig;
