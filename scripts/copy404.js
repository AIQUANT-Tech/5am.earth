import { cpSync } from 'fs'
try {
  cpSync('dist/index.html', 'dist/404.html')
  console.log('Copied dist/index.html -> dist/404.html')
} catch (e) {
  console.error('Failed to create 404.html', e)
  process.exit(1)
}
