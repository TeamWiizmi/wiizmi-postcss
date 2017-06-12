module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested'),
    require('postcss-mixins')(),
    require('postcss-cssnext')(),
    require('postcss-functions')({
      functions: {
        modularScale: function(scale, ratio) {
          ModularScale = require('modular-scale');
          var msScale = new ModularScale({ratios: [ratio], bases: [1]});
          return msScale(scale) + 'rem';
        }
      }
    }),
    require('postcss-lh'),
    require('postcss-utilities'),
    require('postcss-extend'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
  ]
}