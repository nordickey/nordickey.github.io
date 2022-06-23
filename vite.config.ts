import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = {
  MODE:           process.env.NODE_ENV,
  APP_NAME:       process.env.npm_package_name,
  VERSION:        process.env.npm_package_version,
  AUTHOR:         process.env.npm_package_author_name,
  DESCRIPTION:    process.env.npm_package_description,
  HOMEPAGE:       process.env.npm_package_homepage,
  REPOSITORY_URL: process.env.npm_package_repository_url,
  COMMIT_HASH:    process.env.GITHUB_SHA || 'development',
  PUBLIC_URL:     process.env.PUBLIC_URL || '/',
  SPONSOR_URL:    process.env.npm_package_funding_url,
  BUILD_DATE:     new Date().toISOString()
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
      }
    },
    server: {
      port: 8080
    },
    define: {
      __VITE_ENV__: JSON.stringify(env)
    }
  }
})
