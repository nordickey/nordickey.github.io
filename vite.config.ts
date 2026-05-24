import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function appEnvPlugin(): Plugin {
  return {
    name: 'app-env',
    configResolved(config) {
      const env = config.env as Record<string, string>
      env.VITE_APP_NAME = 'NordicKey'
      env.VITE_VERSION = process.env.npm_package_version || '0.0.1'
      env.VITE_AUTHOR = process.env.npm_package_author_name || ''
      env.VITE_DESCRIPTION = process.env.npm_package_description || ''
      env.VITE_HOMEPAGE = process.env.npm_package_homepage || ''
      env.VITE_REPOSITORY_URL = process.env.npm_package_repository_url || ''
      env.VITE_COMMIT_HASH = process.env.GITHUB_SHA || 'development'
      env.VITE_PUBLIC_URL = process.env.PUBLIC_URL || '/'
      env.VITE_SPONSOR_URL = process.env.npm_package_funding_url || ''
      env.VITE_BUILD_DATE = new Date().toISOString()
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    appEnvPlugin(),
  ],
  server: {
    port: 8080
  }
})
