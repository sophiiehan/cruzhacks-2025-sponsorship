/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: string
  VITE_ENDPOINT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
