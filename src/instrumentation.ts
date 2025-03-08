import MangaService from '@/db/mangaService';

export function register() {
	if (process.env.DB_HOST === undefined) {
		console.warn('Missing DB_HOST environment variable, using default \'localhost\'');
		process.env.DB_HOST = 'localhost';
	}
	if (process.env.DB_PORT === undefined) {
		console.warn('Missing DB_PORT environment variable, using default \'5432\'');
		process.env.DB_PORT = '5432';
	}
	if (isNaN(+process.env.DB_PORT)) {
		console.warn('DB_PORT environment variable is not a number, using default \'5432\'');
		process.env.DB_PORT = '5432';
	}
	if (process.env.DB_NAME === undefined) {
		throw new Error('Missing DB_NAME environment variable');
	}
	if (process.env.DB_USER === undefined) {
		throw new Error('Missing DB_USER environment variable');
	}
	if (process.env.DB_PASS === undefined) {
		throw new Error('Missing DB_PASS environment variable');
	}

	try {
		new MangaService().getMangaPaged(1, 0).then((_) => {
			console.log(`DB test successfull`);
		});
	} catch (err) {
		console.error(`DB test failed`);
		throw err;
	}
}