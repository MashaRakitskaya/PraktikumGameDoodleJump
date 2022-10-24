require('@babel/register')({
  extensions: ['.tsx', '.jsx', '.js', '.ts'],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'transform-assets',
      {
        extensions: ['css', 'svg'],
        name: 'static/media/[name].[hash:8].[ext]'
      }
    ]
  ]
});

require('./server');
