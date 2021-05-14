import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import ts from "@wessberg/rollup-plugin-ts";
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/examples/index.tsx',
  output: [
    {
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      },
      file: 'dist/react-thumbnails.js',
      format: 'umd',
      name: 'ReactThumbnails'
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
      tsconfig: 'tsconfig.json'
    }),
    commonjs(),
    resolve({
      browser: true,
      preferBuiltins: true
    }),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist/' }
      ]
    })
  ]
};
