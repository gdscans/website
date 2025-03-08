import postgres from 'postgres';

export default class DbHelper {
	static connection: postgres.Sql | undefined = undefined;

	static connect() {
		console.log("Connecting to Database...");
		this.connection = postgres('', {
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		})
		return this.connection;
	}
}