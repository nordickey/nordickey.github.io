/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: string
  readonly VITE_APP_NAME: string
  readonly VITE_VERSION: string
  readonly VITE_AUTHOR: string
  readonly VITE_DESCRIPTION: string
  readonly VITE_HOMEPAGE: string
  readonly VITE_REPOSITORY_URL: string
  readonly VITE_COMMIT_HASH: string
  readonly VITE_PUBLIC_URL: string
  readonly VITE_SPONSOR_URL: string
  readonly VITE_BUILD_DATE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
