import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import commonjs from "rollup-plugin-commonjs";
import { terser } from 'rollup-plugin-terser';


export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'app',
    }
  ],
  plugins: [
    commonjs(),
    resolve(), // Plugins commonjs and resolve are neccessary to include core-js, otherwise rollup treat it as external dependencies by defaut
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      extensions: [...DEFAULT_EXTENSIONS, 'ts', 'tsx', 'js'],
    }),
    terser({ format: { comments: false }}), // tsx? extension must be added otherwise ts files are not included
  ]
};