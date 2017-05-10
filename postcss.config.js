module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-modular-scale')(),
    require('postcss-lh')(),
    require('postcss-cssnext')(),
    require('postcss-utilities')(),
    require('postcss-nested')(),
  ]
}