/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_CRUZHACKS_API_KEY: string
  VITE_CRUZHACKS_ENDPOINT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
