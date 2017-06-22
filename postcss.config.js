module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested'),
    require('postcss-mixins')(),
    require('postcss-cssnext')(),
    require('postcss-functions')({
      functions: {
        modularScale: function(scale, ratios, bases) {
          ModularScale = require('modular-scale');
          var msScale = new ModularScale({ratios: [ratios], bases: [bases]});
          return msScale(scale);
        }
      }
    }),
    require('postcss-lh'),
    require('postcss-utilities'),
    require('postcss-extend')
  ]
}