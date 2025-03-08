import Genre from '@/types/genre';
import Status from '@/types/status';

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

	constructor(mangaId: number, mangaUpdatesId: string, romanjiTitle: string, englishTitle: string, japaneseTitle: string, description: string, authors: string[], artists: string[], status: Status, genres: Genre[]) {
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
	}
}