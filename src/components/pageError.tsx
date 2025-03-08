export default function PageError({errorMessage}: {
	errorMessage: string;
}) {
	return <div
		className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		<span
			className="w-1/12 aspect-square border-8 rounded-full border-red-600 animate-pulse my-auto text-center flex"><p
			className="m-auto text-6xl font-bold">!</p></span>
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-black">Error</h1>
			<p>{errorMessage}</p>
		</div>
	</div>;
}