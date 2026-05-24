import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const APP_NAME    = import.meta.env.VITE_APP_NAME
const VERSION     = import.meta.env.VITE_VERSION
const COMMIT_HASH = import.meta.env.VITE_COMMIT_HASH
const BUILD_DATE  = import.meta.env.VITE_BUILD_DATE

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
