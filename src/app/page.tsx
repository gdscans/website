import Card from '@/components/card';
import Searchbar from '@/components/searchbar';
import VerticalScroller from '@/components/verticalScroller';

export default async function Home() {
	return (
		<div
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full mt-32">
				<Searchbar/>
			</main>
			<main
				className="flex flex-col gap-8 row-start-2 h-full justify-center items-center sm:items-start w-full overflow-x-hidden">
				<div className="flex flex-col w-fit">
					<h1 className="text-4xl font-thin">Latest releases</h1>
					<hr className="mt-1 h-1 bg-gray-100/15 border-0 rounded-sm"/>
				</div>
				<VerticalScroller>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={2}
						imageUrl="https://mangadex.org/covers/68a946fc-7ff0-434e-a500-34b3207efd6f/498beea6-1178-4ec7-ab6a-ec4e7af364fa.jpg"
						title="Class no Bocchi Gal wo Omochikaeri Shite Seisokei Bijin ni Shite Yatta Hanashi"
						authors={['Yuzumoto Haruto', 'Nanase Hajime']}
						genres={['Romance', 'Comedy', 'Drama', 'Slice of Life', 'Adaptation']}/>
					<Card
						seriesId={3}
						imageUrl="https://mangadex.org/covers/07125c94-dc35-4064-a676-2cea158a55d6/16b36d9c-6614-4056-b3b2-5f81e61e9d37.jpg"
						title="Yuusha Party wo Oidasareta Kiyoubinbou ~Party Jijou de Fuyojitsushi wo Yatteita Kenshi, Bannou e to Itaru~"
						authors={['Itsuki Togami', 'Yonezo']}
						genres={['Suggestive', 'Action', 'Romance', 'Comedy', 'Fantasy', 'Adaptation']}/>
					<Card
						seriesId={4}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
					<Card
						seriesId={1}
						imageUrl="https://mangadex.org/covers/955c730a-9304-4f82-ae96-af48ff5eaa0c/d1db736e-8e28-42e4-928a-533031f3a21c.jpg"
						title="Kurai Anoko to Shintai koto" authors={['Ikari Manatsu']}
						genres={['Romance', 'Comedy', 'School Life']}/>
				</VerticalScroller>
			</main>
		</div>
	);
}
