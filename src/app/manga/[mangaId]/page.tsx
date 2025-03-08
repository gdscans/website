import ChapterList from '@/components/chapterList';
import PageError from '@/components/pageError';
import Paginator from '@/components/paginator';
import MangaService from '@/db/mangaService';
import MangaNotFoundError from '@/errors/mangaNotFoundError';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MangaInfo({params, searchParams}: {
	params: Promise<{ mangaId: string }>,
	searchParams: Promise<{ page: string | undefined }>,
}) {
	const {mangaId} = await params;
	let {page} = await searchParams;
	if (!page) page = "1"

	if (isNaN(+mangaId))
		return <PageError errorMessage="Invalid Manga ID"/>;

	if (isNaN(+page))
		return <PageError errorMessage="Invalid page"/>;


	const mangaService = new MangaService();
	let manga;
	try {
		manga = await mangaService.getMangaBySeriesId(Number(mangaId));
	} catch (err: unknown) {
		if (err instanceof MangaNotFoundError) {
			return notFound();
		}
		throw err;
	}

	return (
		<div
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full mt-32 h-full">
				<div className="grid grid-cols-2 grid-rows-4 grid-flow-row w-1/2 mx-auto">
					<div className="flex row-span-4 col-start-1 w-full h-full relative">
						<Image src={`/covers/${manga.mangaId}.png`} alt="Manga Cover" className="object-contain my-auto"
						       fill/>
					</div>
					<div className="flex-1 my-4 row-span-2 col-start-2 row-start-1 h-64">
						<h1 className="text-3xl font-thin">{manga.romanjiTitle}</h1>
						<hr className="text-white/25 h-1"/>
						<h2 className="text-lg font-thin">{manga.englishTitle}</h2>
						<h2 className="text-md font-thin">{manga.japaneseTitle}</h2>
					</div>
					<div className="grid grid-cols-2 col-start-2 gap-2 row-start-3">
						<p>Author(s):</p>
						<p>{manga.authors.join(', ')}</p>

						<p>Artist(s):</p>
						<p>{manga.artists.join(', ')}</p>

						<p>Genre(s):</p>
						<p>{manga.genres.join(', ')}</p>
					</div>
				</div>
				<ChapterList mangaId={Number(mangaId)} count={10} page={Number(page) ?? 1} />
				<Paginator page={Number(page)} pageCount={Math.ceil(manga.chapterCount / 10)} />
			</main>
		</div>
	);
}