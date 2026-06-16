import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import http from 'http';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { Server as SocketIOServer } from 'socket.io';
import routes from './routes';

dotenv.config();

export function createApp() {
  const app = express();
  const httpServer = http.createServer(app);

  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: process.env.CORS_ORIGIN?.split(',') ?? '*',
      credentials: true
    }
  });

  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN?.split(',') ?? true,
      credentials: true
    })
  );
  app.use(morgan('dev'));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));

  app.use(routes);

  app.use(
    '/api',
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 200
    })
  );

  io.on('connection', (socket) => {
    socket.on('join_room', (room: string) => {
      if (!room) return;
      socket.join(room);
    });

    socket.on('send_message', (payload: any) => {
      const { room, message } = payload ?? {};
      if (!room) return;
      io.to(room).emit('receive_message', {
        message,
        from: socket.id
      });
    });
  });

  return { app, httpServer };
}

