import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const APP_NAME    = __VITE_ENV__.APP_NAME
const VERSION     = __VITE_ENV__.VERSION
const COMMIT_HASH = __VITE_ENV__.COMMIT_HASH
const BUILD_DATE  = __VITE_ENV__.BUILD_DATE

const info = `
${APP_NAME} - v${VERSION}-${COMMIT_HASH.slice(0, 7)}
build date: ${BUILD_DATE}
`.trim()

async function main() {
  console.info(info)
  console.info('Under development, please wait...')

  const container = document.querySelector('#root')
  if (!container) throw new Error('No #root container!')
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

window.onload = main
