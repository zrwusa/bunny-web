export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRODUCT_GRPC_URI: string;
      BASE_URL: string;
      SCM_PATH: string;

      NEXTAUTH_SECRET: striing;
      NEXTAUTH_URL: striing;

      GOOGLE_CLIENT_ID: striing;
      GOOGLE_CLIENT_SECRET: striing;

      GITHUB_CLIENT_ID: striing;
      GITHUB_CLIENT_SECRET: striing;

      PASSPORT_BASE_URL: string;
    }
  }
}
