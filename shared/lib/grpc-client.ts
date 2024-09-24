import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';

// 定义 proto 文件路径
// const PROTO_PATH = join(__dirname, 'proto/products.proto');
const PROTO_PATH = join(process.cwd(), 'proto/products.proto');

// 加载 proto 文件
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// 加载产品服务的 proto 定义
const productsProto = grpc.loadPackageDefinition(packageDefinition).products as any;

// 创建 gRPC 客户端
export const inventoryClient = new productsProto.ProductService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// 定义 CreateProduct 请求参数的类型
export interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

// // 调用 CreateProduct RPC 方法
// function createProduct() {
//   const request: CreateProductRequest = {
//     name: 'New Product',
//     price: 29.99,
//     description: 'A fantastic new product',
//   };

//   inventoryClient.CreateProduct(request, (err: grpc.ServiceError, response: any) => {
//     if (err) {
//       console.error('Error creating product:', err);
//     } else {
//       console.log('Created Product:', response.product);
//     }
//   });
// }

// // 调用 GetProductById RPC 方法
// function getProductById(productId: string) {
//   inventoryClient.GetProductById({ id: productId }, (err: grpc.ServiceError, response: any) => {
//     if (err) {
//       console.error('Error fetching product:', err);
//     } else {
//       console.log('Fetched Product:', response.product);
//     }
//   });
// }

// // 调用 GetAllProducts RPC 方法
// function getAllProducts() {
//   const call = inventoryClient.GetAllProducts({});
//   call.on('data', (product: any) => {
//     console.log('Product:', product.product);
//   });
//   call.on('end', () => {
//     console.log('All products fetched');
//   });
// }

// // 执行 gRPC 调用
// createProduct();
// getProductById('your-product-id');
// getAllProducts();
