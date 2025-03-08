import MangaService from '@/db/mangaService';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET(req: NextRequest) {
	if (isNaN(+(req.nextUrl.searchParams.get('limit') ?? 0)))
		throw new Error(`'limit' is not a number`);
	if (isNaN(+(req.nextUrl.searchParams.get('offset') ?? 0)))
		throw new Error(`'limit' is not a number`);

	const limit = Number(req.nextUrl.searchParams.get('limit') ?? 10);
	const offset = Number(req.nextUrl.searchParams.get('offset') ?? 0);

	const mangaService = new MangaService();
	const manga = await mangaService.getMangaPaged(limit, offset);

	return NextResponse.json(manga);
}