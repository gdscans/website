import Image from 'next/image';
import Link from 'next/link';

export default async function Card({seriesId, imageUrl, title, authors, genres}: {
	seriesId: number,
	imageUrl: string,
	title: string,
	authors: string[],
	genres: string[],
}) {
	return (
		<Link className="flex flex-col w-full" href={`/manga/${seriesId}`}>
			<div className="w-64 h-96 bg-white/5 relative overflow-hidden rounded-3xl group">
				<Image src={imageUrl} alt="Manga Cover" fill className="object-cover rounded-3xl"/>
				<div
					className="absolute top-full group-hover:top-0 w-full h-96 overflow-scroll px-4 py-2 bg-gradient-to-b from-black/80 from-50% to-purple-600/50  transition-all duration-300 ease-in-out">
					<h1 className="text-xl italic">{title}</h1>
					<hr/>
					<ol className="flex-1 gap-2">
						<li className="grid grid-cols-2 items-start justify-between gap-4 p-2">
							<b>Author(s)</b>
							<ol>
								{authors.map((author) => (
									<li key={author}>- {author}</li>
								))}
							</ol>
						</li>
						<li className="grid grid-cols-2 items-start justify-between gap-4 p-2">
							<b>Genre(s)</b>
							<ol>
								{genres.map((genre) => (
									<li key={genre}>- {genre}</li>
								))}
							</ol>
						</li>
					</ol>
				</div>
			</div>
		</Link>
	);
}