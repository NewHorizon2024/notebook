// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_MONGODB_PASSWORD: string;
    MONGODB_PASSWORD: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
