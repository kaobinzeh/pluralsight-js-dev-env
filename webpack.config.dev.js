import path from  'path';

export default{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    debug:true,
    noInfo: false
  },
  entry: [
    path.resolve(__dirname,'src/index')
  ],
  target:'web',
  output: {
   path: path.resolve(__dirname,'src'),
    publicPath:'/',
    filename: 'bundle.js'
  },
  plugins:[],
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude:'/node-modules',
        use:['babel-loader']
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  }
}
