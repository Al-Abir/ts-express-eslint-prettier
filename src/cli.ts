#!/usr/bin/env node
// src/cli.ts
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

// CLI থেকে project name
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

// dist compile হওয়ার পরে template এর সঠিক path
const templateDir = path.resolve(__dirname, '../template') // <- important
if (!fs.existsSync(templateDir)) {
  console.error('Template folder not found:', templateDir)
  process.exit(1)
}

// Copy template
fs.cpSync(templateDir, targetDir, { recursive: true })
console.log(`Project created at ${targetDir}`)

// Install dependencies
console.log('Installing dependencies...')
execSync('npm install', { cwd: targetDir, stdio: 'inherit' })

console.log('Done! Start development:')
console.log(`cd ${projectName}`)
console.log('npm run dev')
