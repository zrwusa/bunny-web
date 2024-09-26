import { NextRequest, NextResponse } from 'next/server';
import { productClient } from '../../../../../../shared/grpc/clients';
import { CreateProductDto } from './dto';
import { withValidation } from '../../../../../middlewares/validation';

async function handleGET() {
  const { products } = await productClient.getAllProducts({});
  return NextResponse.json({ data: products }, { status: 200 });
}

async function handlePOST(req: NextRequest) {
  const { name, price, description }: CreateProductDto = await req.json();
  const { product } = await productClient.createProduct({
    name,
    price,
    description,
  });
  return NextResponse.json({ data: product }, { status: 201 });
}

export const GET = handleGET;
export const POST = withValidation(CreateProductDto, handlePOST);
