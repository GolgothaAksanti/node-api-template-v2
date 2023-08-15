import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import port from '@src/core/utils/port';
import logger, { httpLogStream } from '@src/core/utils/logger';
import { IRoute } from '@src/core/interfaces/routeInterface';

class App {
  public app: Application;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initDefaultRoutes();
  }

  private initMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(morgan('combined', { stream: httpLogStream }));
    this.app.use(cors());
  }

  private initRoutes(routes: IRoute[]): void {
    routes.forEach(route => {
      this.app.use('/api/v1', route.router);
    });
  }

  private initDefaultRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      return res.status(200).json({
        statusCode: 200,
        message: 'Welcome to TIMESMO',
      });
    });

    this.app.all('/', (req: Request, res: Response) => {
      return res.status(400).json({
        statusCode: 400,
        message: `Invalid method`,
      });
    });

    this.app.use('*', (req: Request, res: Response) => {
      return res.status(404).json({
        statusCode: 404,
        message: `Invalid route`,
      });
    });
  }

  listen(): void {
    this.app.listen(port, () => {
      logger.info(`App listening on port ${port}`);
    });
  }

  getApp = () => this.app;
}

export default App;
