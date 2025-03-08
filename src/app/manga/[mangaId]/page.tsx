import PageError from '@/components/pageError';
import MangaService from '@/db/mangaService';
import MangaNotFoundError from '@/errors/mangaNotFoundError';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MangaInfo({params}: {
	params: Promise<{ mangaId: string }>
}) {
	const {mangaId} = await params;

	if (isNaN(+mangaId)) {
		return <PageError errorMessage="Invalid Manga ID"/>;
	}

	const mangaservice = new MangaService();
	let manga;
	try {
		manga = await mangaservice.getMangaBySeriesId(Number(mangaId));
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
				<div className="w-1/2 mx-auto text-3xl font-bold mt-16">
					<h1>Chapters</h1>
					<hr className="h-1 my-2"/>
					<div className="flex-1 font-normal text-lg">
						<div className="grid grid-cols-6 grid-flow-row gap-4 hover:bg-white/15 rounded-lg">
							<p className="font-thin ml-4">204</p>
							<p className="col-span-4">This epic chapter that definitely exists</p>
							<p className="text-white/25">25 Feb, 2025</p>
						</div>
						<div className="grid grid-cols-6 grid-flow-row gap-4 hover:bg-white/15 rounded-lg">
							<p className="font-thin ml-4">203</p>
							<p className="col-span-4">Wow this is so cool</p>
							<p className="text-white/25">25 Feb, 2025</p>
						</div>
						<div className="grid grid-cols-6 grid-flow-row gap-4 hover:bg-white/15 rounded-lg">
							<p className="font-thin ml-4">202</p>
							<p className="col-span-4">The Unexpected Journey of a Ordinary Schoolboy Who Was Transported
								to a World of Magic and Monsters, Where He Must Team Up with Legendary Heroes, Solve
								Mysteries of a Lost Kingdom, and Discover His True Destiny as the Chosen One Who Can
								Either Save or Destroy Everything while Completing His Harem in This Magical World</p>
							<p className="text-white/25">25 Feb, 2025</p>
						</div>
						<div className="grid grid-cols-6 grid-flow-row gap-4 hover:bg-white/15 rounded-lg">
							<p className="font-thin ml-4">201.5</p>
							<p className="col-span-4">Christmas, just a week away! Can you believe it? I'm so happy with
								this information</p>
							<p className="text-white/25">25 Feb, 2025</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}