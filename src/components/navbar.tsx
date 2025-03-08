import Link from 'next/link';

export default async function Navbar() {

	const pages: { title: string, route: string }[] = [
		{title: 'Home', route: '/'},
		{title: 'Search', route: '/search'},
		{title: 'About', route: '/about'}
	];

	return (
		<nav>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<span
						className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GD Scans</span>
				</Link>
				<button data-collapse-toggle="navbar-default" type="button"
				        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				        aria-controls="navbar-default" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
					     viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						      d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
						{pages.map((page, i) => (
							<li key={i}>
								<Link href={page.route}>
									<div
										className="hover:bg-white/5 px-4 py-2 rounded-md transition-all duration-200 transform">
										<h2>{page.title}</h2>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>

	);
	// return (
	// 	<nav
	// 		className="grid grid-flow-row grid-cols-3 text-2xl my-2 justify-center font-[family-name:var(--font-geist-sans)] w-full">
	// 		<h1 className="text-5xl shrink-0 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-500 text-transparent inline-block bg-clip-text ml-16">GD
	// 			Scans</h1>
	// 		<li className="flex items-center justify-center gap-8">
	// 			{pages.map((page, i) => (
	// 				<Link key={i} href={page.route}>
	// 					<div className="hover:bg-white/5 px-4 py-2 rounded-md transition-all duration-200 transform">
	// 						<h2>{page.title}</h2>
	// 					</div>
	// 				</Link>
	// 			))}
	// 		</li>
	// 		<Link className="my-auto ml-auto mr-16" href="/contact">Contact</Link>
	// 	</nav>
	// );
}