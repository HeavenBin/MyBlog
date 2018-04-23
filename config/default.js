module.exports = {
  port: 80,                //port: 程序启动要监听的端口号
  session: {                 //express-session 的配置信息
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://39.108.168.223:27017/admin'
  //mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名
}
