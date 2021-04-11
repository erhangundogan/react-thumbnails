import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import ts from "@wessberg/rollup-plugin-ts";
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';

const production = process.env.NODE_ENV === 'production';

const output = {
  sourcemap: !production,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
}

export default {
  input: 'src/index.ts',
  output: [
    {
      ...output,
      file: 'dist/cjs/react-image-view.js',
      format: 'cjs'
    },
    {
      ...output,
      file: 'dist/umd/react-image-view.js',
      format: 'umd',
      name: 'ReactImageView'
    },
    {
      ...output,
      file: 'dist/es/react-image-view.js',
      format: 'es'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    postcss({
      extract: false
    }),
    ts({
      tsconfig: production ? 'tsconfig.prod.json' : 'tsconfig.json'
    }),
    commonjs(),
    resolve({
      browser: true,
      preferBuiltins: true
    }),
    production ? terser() : null,
    production ? filesize() : null
  ]
};
