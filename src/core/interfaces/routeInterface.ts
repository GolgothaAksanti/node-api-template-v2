import { Router, Request, Response } from 'express';

export interface IRoute {
  path: string;
  router: Router;
}

export interface IRequestResponse {
  req: Request;
  res: Response;
}

export type TResponse = {
  status: number;
  message: string;
};
