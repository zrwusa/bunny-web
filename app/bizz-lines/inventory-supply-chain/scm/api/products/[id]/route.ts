import {NextRequest, NextResponse} from 'next/server';
import { productClient } from '../../../../../../../shared/grpc/clients';

export const GET = async function handleGET(
    req: NextRequest,
    { params: { id } }: { params: { id: string } },
) {
  const response = await productClient.getProductById({ id });
  return NextResponse.json(response, { status: 200 });
};
