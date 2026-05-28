import { defineConfig } from 'oxfmt'

export default defineConfig({
  semi: false,
  singleQuote: true,
  sortImports: {},
  trailingComma: 'none',
  jsxSingleQuote: true,
  sortTailwindcss: {
    functions: ['cn', 'cva']
  }
})
