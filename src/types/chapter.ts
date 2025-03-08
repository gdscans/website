import { Row } from 'postgres';

export default class Chapter {
	readonly chapterId: number;
	readonly mangaId: number;
	readonly chapter_number: number;
	readonly title: string;
	readonly uploadDate: Date;
	readonly pageCount: number;

	constructor(chapterId: number, mangaId: number, chapter_number: number, title: string, uploadDate: Date, pageCount: number) {
		this.chapterId = chapterId;
		this.mangaId = mangaId;
		this.chapter_number = chapter_number;
		this.title = title;
		this.uploadDate = uploadDate;
		this.pageCount = pageCount;
	}

	static fromRow(chapter: Row) {
		return new Chapter(
			chapter.chapter_id as number,
			chapter.manga_id as number,
			chapter.chapter_number as number,
			chapter.title as string,
			chapter.upload_date as Date,
			chapter.page_count as number
		);
	}
}