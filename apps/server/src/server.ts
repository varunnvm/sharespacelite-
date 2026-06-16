import dotenv from 'dotenv';
import { createApp } from './index';

dotenv.config();


const port = Number(process.env.PORT ?? 4000);
const { httpServer } = createApp();

httpServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server] listening on :${port}`);
});

