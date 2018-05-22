import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'es2015-rollup'
        ]
      ]
    })
  ],
  sourceMap: 'inline',
  exports: 'named',
  moduleName: 'asyncLoad'
}
