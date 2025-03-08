import MangaService from '@/db/mangaService';
import Link from 'next/link';

export default async function ChapterList({mangaId, page, count}: {mangaId: number, page: number, count: number}) {



	const mangaService = new MangaService();
	const chapters = await mangaService.getMangaChaptersPaged(
		mangaId,
		count,
		count * (page - 1)
	)

	return (<div className="w-1/2 mx-auto text-3xl font-bold mt-16">
		<h1>Chapters</h1>
		<hr className="h-1 my-2"/>
		<div className="flex-1 font-normal text-lg">
			{chapters.map(chapter => {
				return (
					<Link href={`/chapter/${chapter.chapterId}`} key={chapter.chapterId} className="grid grid-cols-6 grid-flow-row gap-4 hover:bg-white/15 rounded-lg cursor-pointer">
						<p className="font-thin ml-4">{chapter.chapter_number}</p>
						<p className="col-span-4">{chapter.title}</p>
						<p className="text-white/25">{chapter.uploadDate.toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric'})}</p>
					</Link>
				)}
			)}
		</div>
	</div>)
}