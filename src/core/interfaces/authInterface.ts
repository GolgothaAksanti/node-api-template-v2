/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

interface IAuth {
  user(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
}

export default IAuth;
