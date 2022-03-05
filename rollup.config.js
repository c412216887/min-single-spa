// rollup.config.js
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        sourcemap: true,
        format: 'cjs'
    },
    plugins: [json(), typescript()]
}