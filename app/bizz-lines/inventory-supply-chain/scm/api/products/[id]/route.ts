import {NextRequest, NextResponse} from 'next/server';
import { productClient } from '../../../../../../../shared/grpc/clients';

export async function handleGET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  const { product } = await productClient.getProductById({ id });
  return NextResponse.json({ data: product }, { status: 200 });
}

export const GET = handleGET;
