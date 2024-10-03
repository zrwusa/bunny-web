import { NextRequest, NextResponse } from 'next/server';
import { productClient } from '../../../../../../shared/grpc/clients';
import { CreateProductDto } from './dto';
import { withValidation } from '../../../../../middlewares/validation';
import { controllerResponseCreator } from '../../common/bl-response';

export const GET = async () => {
  const { buildSuccess, buildFailure } =
    controllerResponseCreator.createBuilders('getAllProducts');
  const res = await productClient.getAllProducts({});
  const { success, data } = res;
  if (success)
    return NextResponse.json(buildSuccess('GET_ALL_PRODUCTS_SUCCESS', data), {
      status: 200,
    });

  return NextResponse.json(buildFailure('GET_ALL_PRODUCTS_FAILED'), {
    status: 404,
  });
};
export const POST = withValidation(
  CreateProductDto,
  async function handlePOST(req: NextRequest) {
    const { name, price, description }: CreateProductDto = await req.json();
    const { data: product } = await productClient.createProduct({
      name,
      price,
      description,
    });
    return NextResponse.json({ data: product }, { status: 201 });
  },
);
