import MangaNotFoundError from '@/errors/mangaNotFoundError';
import Genre from '@/types/genre';
import Manga from '@/types/manga';
import Status from '@/types/status';
import { throws } from 'node:assert';
import postgres from 'postgres';

export default class MangaService {

	db: postgres.Sql;

	constructor() {
		this.db = postgres('', {
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		});
	}

	async getMangaBySeriesId(mangaId: number): Promise<Manga> {
		const manga = await this.db`
            SELECT *
            FROM manga
            WHERE manga_id = ${mangaId}`;
		if (manga.length === 0 || !manga) {
			throw new MangaNotFoundError(`Manga with ID '${mangaId}' not found in table 'manga'`);
		}

		const people = await this.db`
            SELECT p.name, mp.role
            FROM people AS p
                     INNER JOIN manga_people AS mp ON p.person_id = mp.person_id
            WHERE mp.manga_id = ${mangaId}`;
		if (people.length === 0 || !people) {
			throw new MangaNotFoundError(`Manga with ID '${mangaId}' not found in table 'manga_people'`);
		}

		const genres = await this.db`
            SELECT g.name
            FROM genre AS g
                     INNER JOIN manga_genre AS mg ON g.genre_id = mg.genre_id
            WHERE mg.manga_id = ${mangaId}`;
		if (genres.length === 0 || !genres) {
			throw new MangaNotFoundError(`Manga with ID '${mangaId}' not found in table 'manga_genre'`);
		}

		return new Manga(
			manga[0].manga_id as number,
			manga[0].mangaupdates_id as string,
			manga[0].romanji_title as string,
			manga[0].english_title as string,
			manga[0].japanese_title as string,
			manga[0].description as string,
			people
				.filter(person => person.role === 'AUTHOR')
				.map(person => person.name),
			people
				.filter(person => person.role === 'ARTIST')
				.map(person => person.name),
			manga[0].status as Status,
			genres.map(genre => Genre[genre.name as keyof typeof Genre])
		);
	}

	async getMangaPaged(limit: number, offset: number): Promise<Manga[]> {
		const mangas = await this.db`
            SELECT *
            FROM manga
            LIMIT ${limit} OFFSET ${offset}`;
		if (mangas.length === 0 || !mangas) {
			throw new MangaNotFoundError(`No manga found in table 'manga'`);
		}

		const mangaIds = mangas.map((manga) => manga.manga_id as number);

		const people = await this.db`SELECT mp.manga_id, p.name, mp.role
                                     from people as p
                                              inner join manga_people as mp on p.person_id = mp.person_id
                                     where mp.manga_id in ${this.db(mangaIds)}`;
		if (people.length === 0 || !people) {
			throw new MangaNotFoundError(`no people found in table 'manga_people' for the following manga id's: (${mangaIds.join(',')})`);
		}

		const genres = await this.db`SELECT mg.manga_id, g.name
                                     from genre as g
                                              inner join manga_genre as mg on g.genre_id = mg.genre_id
                                     where mg.manga_id in ${this.db(mangaIds)}`;
		if (genres.length === 0 || !genres) {
			throw new MangaNotFoundError(`No genres found in table 'manga_genre' for the following manga id's: (${mangaIds.join(',')})`);
		}

		return mangas.map(manga => {
			return new Manga(
				manga.manga_id as number,
				manga.mangaupdates_id as string,
				manga.romanji_title as string,
				manga.english_title as string,
				manga.japanese_title as string,
				manga.description as string,
				people
					.filter(person => person.manga_id === manga.manga_id && person.role === 'AUTHOR')
					.map(person => person.name),
				people
					.filter(person => person.manga_id === manga.manga_id && person.role === 'ARTIST')
					.map(person => person.name),
				manga.status as Status,
				genres
					.filter(genre => genre.manga_id === manga.manga_id)
					.map(genre => Genre[genre.name as keyof typeof Genre])
			);
		});
	}
}