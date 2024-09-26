// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v3.19.1
// source: product.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "product";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

export interface ProductListResponse {
  products: Product[];
}

export interface ProductResponse {
  product: Product | undefined;
}

export interface ProductIdRequest {
  id: string;
}

export interface Empty {
}

function createBaseProduct(): Product {
  return { id: "", name: "", price: 0, description: "" };
}

export const Product: MessageFns<Product> = {
  encode(message: Product, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(25).double(message.price);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Product {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.price = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<Product>): Product {
    return Product.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCreateProductRequest(): CreateProductRequest {
  return { name: "", price: 0, description: "" };
}

export const CreateProductRequest: MessageFns<CreateProductRequest> = {
  encode(message: CreateProductRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(17).double(message.price);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.price = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateProductRequest>): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateProductRequest>): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseProductListResponse(): ProductListResponse {
  return { products: [] };
}

export const ProductListResponse: MessageFns<ProductListResponse> = {
  encode(message: ProductListResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductListResponse {
    return {
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProductListResponse): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ProductListResponse>): ProductListResponse {
    return ProductListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProductListResponse>): ProductListResponse {
    const message = createBaseProductListResponse();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProductResponse(): ProductResponse {
  return { product: undefined };
}

export const ProductResponse: MessageFns<ProductResponse> = {
  encode(message: ProductResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: ProductResponse): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create(base?: DeepPartial<ProductResponse>): ProductResponse {
    return ProductResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProductResponse>): ProductResponse {
    const message = createBaseProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseProductIdRequest(): ProductIdRequest {
  return { id: "" };
}

export const ProductIdRequest: MessageFns<ProductIdRequest> = {
  encode(message: ProductIdRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: ProductIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ProductIdRequest>): ProductIdRequest {
    return ProductIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProductIdRequest>): ProductIdRequest {
    const message = createBaseProductIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty: MessageFns<Empty> = {
  encode(_: Empty, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Empty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Empty>): Empty {
    return Empty.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

export type ProductServiceDefinition = typeof ProductServiceDefinition;
export const ProductServiceDefinition = {
  name: "ProductService",
  fullName: "product.ProductService",
  methods: {
    createProduct: {
      name: "CreateProduct",
      requestType: CreateProductRequest,
      requestStream: false,
      responseType: ProductResponse,
      responseStream: false,
      options: {},
    },
    getProductById: {
      name: "GetProductById",
      requestType: ProductIdRequest,
      requestStream: false,
      responseType: ProductResponse,
      responseStream: false,
      options: {},
    },
    getAllProducts: {
      name: "GetAllProducts",
      requestType: Empty,
      requestStream: false,
      responseType: ProductListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ProductServiceImplementation<CallContextExt = {}> {
  createProduct(
    request: CreateProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProductResponse>>;
  getProductById(
    request: ProductIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProductResponse>>;
  getAllProducts(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
}

export interface ProductServiceClient<CallOptionsExt = {}> {
  createProduct(
    request: DeepPartial<CreateProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProductResponse>;
  getProductById(
    request: DeepPartial<ProductIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProductResponse>;
  getAllProducts(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ProductListResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
