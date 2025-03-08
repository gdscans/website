import DbHelper from '@/db/dbHelper';
import MangaNotFoundError from '@/errors/mangaNotFoundError';
import Chapter from '@/types/chapter';
import Manga from '@/types/manga';
import postgres from 'postgres';

export default class MangaService {

	db: postgres.Sql;

	constructor() {
		this.db = DbHelper.connection || DbHelper.connect();
	}

	async getMangaBySeriesId(mangaId: number): Promise<Manga> {
		const manga = await this.db`
            SELECT *
            FROM manga
            WHERE manga_id = ${mangaId}`;
		if (manga.length === 0 || !manga) {
			throw new MangaNotFoundError(`No manga found in table 'manga' with manga_id '${mangaId}'`);
		}

		const people = await this.db`
            SELECT p.name, mp.role
            FROM people AS p
                     INNER JOIN manga_people AS mp ON p.person_id = mp.person_id
            WHERE mp.manga_id = ${mangaId}`;

		const genres = await this.db`
            SELECT g.name
            FROM genre AS g
                     INNER JOIN manga_genre AS mg ON g.genre_id = mg.genre_id
            WHERE mg.manga_id = ${mangaId}`;

		const chapterCount = await this.db`SELECT COUNT(*) AS chapter_count FROM chapters WHERE manga_id = ${mangaId}`

		return Manga.fromRow(
			manga[0],
			people,
			genres,
			chapterCount[0].chapter_count
		);
	}

	async getMangaPaged(limit: number, offset: number): Promise<Manga[]> {
		const mangas = await this.db`
            SELECT *
            FROM manga
            LIMIT ${limit} OFFSET ${offset}`;
		if (mangas.length === 0 || !mangas) {
			throw new MangaNotFoundError(`No manga found in table 'manga' with limit '${limit}' and offset '${offset}'`);
		}

		const mangaIds = mangas.map((manga) => manga.manga_id as number);

		const people = await this.db`SELECT mp.manga_id, p.name, mp.role
                                     from people as p
                                              inner join manga_people as mp on p.person_id = mp.person_id
                                     where mp.manga_id in ${this.db(mangaIds)}`;

		const genres = await this.db`SELECT mg.manga_id, g.name
                                     from genre as g
                                              inner join manga_genre as mg on g.genre_id = mg.genre_id
                                     where mg.manga_id in ${this.db(mangaIds)}`;

		const chapterCounts = await this.db`select manga_id, COUNT(*) as chapter_count from chapters where manga_id in ${this.db(mangaIds)} group by manga_id`

		return mangas.map(manga => {
			return Manga.fromRow(
				manga,
				people.filter(person => person.manga_id === manga.manga_id),
				genres.filter(genre => genre.manga_id === manga.manga_id),
				chapterCounts.filter(chapterCount => chapterCount.manga_id === manga.manga_id)[0].chapter_count as number ?? 0
			);
		});
	}

	async getMangaChaptersPaged(mangaId: number, limit: number, offset: number): Promise<Chapter[]> {
		const chapters = await this.db`SELECT *
                                       FROM chapters
                                       WHERE manga_id = ${mangaId}
                                       ORDER BY chapter_number DESC
                                       LIMIT ${limit} OFFSET ${offset}`;
		if (chapters.length === 0 || !chapters) {
			throw new MangaNotFoundError(`No chapter found in table 'chapters' with manga_id '${mangaId}', limit '${limit}' and offset '${offset}'`);
		}

		return chapters.map(chapter => {
			return Chapter.fromRow(chapter);
		});
	}
}