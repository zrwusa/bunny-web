import { NextResponse } from 'next/server';
import { CreateProductRequest, inventoryClient } from 'shared/lib/grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const createProductPromisified = promisify(inventoryClient.CreateProduct).bind(inventoryClient);
const getAllProductsPromisified = promisify(inventoryClient.GetAllProducts).bind(inventoryClient);

export async function GET() {
  try {
    const products: any = await getAllProductsPromisified({});
    console.log('Fetched Products:', products);
    return NextResponse.json({ data: products }, { status: 200 });
  } catch (err) {
    console.error('gRPC Error:', err);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST() {
  const request: CreateProductRequest = {
    name: 'New Product2',
    price: 22.99,
    description: 'A fantastic new product',
  };

  try {
    const response: any = await createProductPromisified(request);
    console.log('Created Product:', response.product);
    return NextResponse.json({ data: response.product }, { status: 201 });
  } catch (err) {
    console.error('Error creating product:', err);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
