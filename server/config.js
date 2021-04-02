//配置数据库和端口环境
const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://119.23.230.239:27017/SmallTool',
  port: process.env.PORT || 8000,
};

export default config;
