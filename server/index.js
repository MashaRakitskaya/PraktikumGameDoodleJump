// require('ignore-styles');

require('@babel/register')({
  extensions: ['.tsx', '.jsx', '.js', '.ts'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'transform-assets',
      {
        extensions: ['svg'],
        name: 'static/media/[name].[hash:8].[ext]'
      }
    ]
  ]
});

require('./server');
