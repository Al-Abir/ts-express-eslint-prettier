#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const projectName = process.argv[2]
if (!projectName) {
  console.error(
    'Please provide a project name: npx ts-express-eslint-prettier <project-name>',
  )
  process.exit(1)
}

const targetDir = path.join(process.cwd(), projectName)
if (fs.existsSync(targetDir)) {
  console.error('Folder already exists!')
  process.exit(1)
}

// Copy template folder
const templateDir = path.join(__dirname, 'template')
fs.cpSync(templateDir, targetDir, { recursive: true })

console.log(`Project created at ${targetDir}`)
console.log('Installing dependencies...')
execSync('npm install', { cwd: targetDir, stdio: 'inherit' })

console.log('Done! Start development:')
console.log(`cd ${projectName}`)
console.log('npm run dev')
