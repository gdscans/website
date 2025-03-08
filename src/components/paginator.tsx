'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Paginator({page, pageCount} : {page: number, pageCount: number}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handlePageChange(change: number) {
		const params = new URLSearchParams(searchParams);

		const newPage = page + change;
		if (newPage > pageCount || newPage < 1) return

		params.set('page', newPage.toString())
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className='flex w-full justify-center gap-4 text-4xl mt-2'>
			<button className='text-2xl hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer disabled:text-white/15' disabled={page - 5 < 1} onClick={() => handlePageChange(-5)}>&lt;&lt;&lt;</button>
			<button className='hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer disabled:text-white/15' disabled={page - 1 < 1} onClick={() => handlePageChange(-1)}>&lt;</button>
			<p className='text-3xl my-auto'>{page} / {pageCount}</p>
			<button className='hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer disabled:text-white/15' disabled={page + 1 > pageCount} onClick={() => handlePageChange(1)}>&gt;</button>
			<button className='text-2xl hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer disabled:text-white/15' disabled={page + 5 > pageCount} onClick={() => handlePageChange(5)}>&gt;&gt;&gt;</button>
		</div>
	)
}