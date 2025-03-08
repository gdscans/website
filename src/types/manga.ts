import Genre from '@/types/genre';
import Status from '@/types/status';
import { Row } from 'postgres';

export default class Manga {
	readonly mangaId: number;
	readonly mangaUpdatesId: string;
	readonly romanjiTitle: string;
	readonly englishTitle: string;
	readonly japaneseTitle: string;
	readonly description: string;
	readonly authors: string[];
	readonly artists: string[];
	readonly status: Status;
	readonly genres: Genre[];
	readonly chapterCount: number;

	constructor(mangaId: number, mangaUpdatesId: string, romanjiTitle: string, englishTitle: string, japaneseTitle: string, description: string, authors: string[], artists: string[], status: Status, genres: Genre[], chapterCount: number) {
		this.mangaId = mangaId;
		this.mangaUpdatesId = mangaUpdatesId;
		this.romanjiTitle = romanjiTitle;
		this.englishTitle = englishTitle;
		this.japaneseTitle = japaneseTitle;
		this.description = description;
		this.authors = authors;
		this.artists = artists;
		this.status = status;
		this.genres = genres;
		this.chapterCount = chapterCount;
	}

	static fromRow(manga: Row, people: Row[], genres: Row[], chapterCount: number): Manga {
		return new Manga(
			manga.manga_id as number,
			manga.mangaupdates_id as string,
			manga.romanji_title as string,
			manga.english_title as string,
			manga.japanese_title as string,
			manga.description as string,
			people
				.filter(person => person.role === 'AUTHOR')
				.map(person => person.name),
			people
				.filter(person => person.role === 'ARTIST')
				.map(person => person.name),
			manga.status as Status,
			genres
				.map(genre => Genre[genre.name as keyof typeof Genre]),
			chapterCount
		);
	}
}