import {createChannel, createClient} from 'nice-grpc';
import {ProductServiceClient, ProductServiceDefinition,} from './generated/product';

export const productClient: ProductServiceClient = createClient(
    ProductServiceDefinition,
    createChannel(process.env.PRODUCT_GRPC_URI),
);