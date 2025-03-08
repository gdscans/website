import MangaService from '@/db/mangaService';
import MangaNotFoundError from '@/errors/mangaNotFoundError';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET(req: NextRequest, {params}: { params: Promise<{ mangaId: string }> }) {
	const {mangaId} = await params;

	if (isNaN(+mangaId)) {
		throw new MangaNotFoundError('Invalid manga id');
	}

	const mangaservice = new MangaService();
	const manga = await mangaservice.getMangaBySeriesId(Number(mangaId));

	return NextResponse.json(manga);
}