import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express, { ErrorRequestHandler } from 'express';
import initConn from './ormconfig/connection';
import userRouter from './router/user';
import clothRouter from './router/cloth';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3007);
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(morgan('dev'));
}
app.use(cors());

// =================== router ====================

app.use('/', userRouter);
app.get('/jemin', (req, res) => {
  res.json({ message: 'success' });
});
// 옷장에 들어가는 옷 관련 라우터
app.use('/cloth', clothRouter);

// =================== run typeORM ===================
initConn();

// ================== error handling ====================
app.use((req, res, next) => {
  const error = new Error('not valid uri');
  next(error);
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
};

app.use(errorHandler);

app.listen(app.get('port'), () => {
  console.log(`server start at port ${app.get('port')}`);
});
