const getSession = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		GM_cookie.list({ name: 'canvas_session' }, (cookies, error) => {
			if (error || cookies.length < 1) reject('Failed to get session');
			resolve(cookies[0].value);
		});
	});
};

export default getSession;
