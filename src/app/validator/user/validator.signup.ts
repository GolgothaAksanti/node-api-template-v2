import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '@src/core/base/baseMiddleware';

class SignupValidator extends BaseMiddleware {
  async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    const schema = this.joi.object().keys({
      username: this.joi.string().required(),
      fullname: this.joi.string().required(),
      phonenumber: this.joi
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(10)
        .max(13)
        .required(),
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .required(),
      password: this.joi.string().min(6).required(),
    });
    this.bodyHandler(req, res, schema, next);
  }
}

export default SignupValidator;
