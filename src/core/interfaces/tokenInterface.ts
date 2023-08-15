/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';

interface IToken {
  generate(payload: any, expiresIn: any): string | null;
  decode(token: string): any;
  extract(req: Request, res: Response): string;
}

export default IToken;
