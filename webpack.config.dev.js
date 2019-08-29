import path from  'path';

export default{
  devtool: 'inline-source-map',
  devServer: {
    debug:true,
    noInfo: false,
    mode: 'development'
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
      {test: /\.js$/, exclude:'/node-modules', loaders:['babel-loader']},
      {test: /\.css$/,loaders:['style', 'css']}
    ]
  }
}
