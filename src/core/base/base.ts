/* eslint-disable class-methods-use-this */
import { Response } from 'express';
import Service from '@src/database/Services';

class Base {
  protected Service = Service;

  protected INTERNAL_SERVER_ERROR_CODE = 500;

  protected NOT_FOUND_CODE = 404;

  protected SUCCESS_CODE = 200;

  protected CREATED_CODE = 201;

  protected BAD_REQUEST_CODE = 400;

  protected METHOD_NOT_ALLOWED_CODE = 405;

  protected PAYMENT_REQUIRED_CODE = 402;

  protected FORBIDDEN_CODE = 403;

  protected UNAUTHORIZED_CODE = 401;

  protected INTERNAL_SERVER_ERROR_MSG = ' internal server error ';

  protected NOT_FOUND_MSG = 'resource not found';

  protected SUCCESS_MSG = 'request was successfull ';

  protected CREATED_MSG = 'created successfully ';

  protected BAD_REQUEST_MSG = 'request was invalid';

  protected METHOD_NOT_ALLOWED_MSG = 'wrong method implementation';

  protected PAYMENT_REQUIRED_MSG = 'payment required';

  protected FORBIDDEN_MSG = 'forbidden request';

  protected UNAUTHORIZED_MSG = 'Unauthorized';

  protected AUTH_FAILURE_MSG = 'Invalid Credentials';

  protected NO_ENTRY_MSG = 'Entry do not exist';

  protected INVALID_TOKEN_MSG = 'Token is not valid';

  protected TOKEN_EXPIRED_MSG = 'Token is expired';

  protected NO_DATA_MSG = 'no data available';

  protected MISSING_TOKEN_MSG = 'access token was not provided';

  protected success(
    res: Response,
    code: number,
    message: string,
    data: unknown
  ): Response {
    return res.status(code).json({
      status: code,
      message,
      data,
    });
  }

  protected error(res: Response, code: number, message: string): Response {
    return res.status(code).json({
      status: code,
      message,
    });
  }

  protected ok(res: Response): Response {
    return res.status(this.SUCCESS_CODE).json({
      status: this.SUCCESS_CODE,
      message: this.SUCCESS_MSG,
    });
  }

  protected serverError(res: Response): Response {
    return this.error(
      res,
      this.INTERNAL_SERVER_ERROR_CODE,
      this.INTERNAL_SERVER_ERROR_MSG
    );
  }
}

export default Base;
