var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/noticeBoardApp';
}

if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/noticeBoardTestDb';
}

if(env === 'production'){
  process.env.MONGODB_URI = 'mongodb://eserver:dc7771dc@ds245277.mlab.com:45277/eserver'
}