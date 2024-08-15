import Toastify from 'toastify-js';

const notify = (message: string, right: boolean = false): void => {
	Toastify({
		text: message,
		gravity: 'bottom',
		position: right ? 'right' : 'left',
		className: 'twp'
	}).showToast();
};

export default notify;
