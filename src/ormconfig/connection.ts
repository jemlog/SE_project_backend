import { createConnection, getConnectionOptions } from 'typeorm';
import process from 'process';
import dotenv from 'dotenv';
dotenv.config();
const initConn = async () => {
  // 이 방식으로 설정하는 이유
  // typeORM이 connection을 사용할때는 결국 default 옵션으로 진행해야 한다.
  // 그러므로 실행 시에 production등의 이름을 넣으면 인식이 안된다.
  // 일단 production관련 option을 가지고 온 뒤에 createConnection할때는 이름만 default로 변경!
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  createConnection({ ...connectionOptions, name: 'default' });
};

export default initConn;
