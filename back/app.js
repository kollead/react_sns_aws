const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/');
const db = require('./models');
const app = express();
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error); 
app.use('/post', postRouter);
app.use('/user', userRouter);
app.listen(3065, () => {
  console.log('서버 실행 중...');
});